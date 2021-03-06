import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, END_POINT } from '../../../../../utils/constants';
import * as actionSnackBar from '../../../../../redux/SnackBar/action';
import { changeChosenCompany, selectChosenCompany } from '../../../../../redux/companies/chosenCompanySlice';
import SideFormView from './SideForm.view';

const SideForm = (props) => {
	const [contractSigner, setContractSigner] = useState(props.chosenContract?.signer_user);
	const [signerInputValue, setSignerInputValue] = useState(props.chosenContract?.signer_user.name);
	const [loadingPDF, setLoadingPDF] = useState(false);
	const [emailSent, setEmailSent] = useState(false);
	const [validationResult, setValidationResult] = useState({ step1: false, step2: false });
	const dispatch = useDispatch();
	const chosenCompany = useSelector(selectChosenCompany);
	const history = useHistory();

	const handleChange = (e) => {
		setContractSigner(e ? e.id : '');

		if (e) {
			setValidationResult((prev) => ({ ...prev, step1: true }));
		} else {
			setValidationResult((prev) => ({ ...prev, step1: false }));
		}
	};

	const sendEmail = async () => {
		if (signerInputValue && props.activeSidebar) {
			setValidationResult((prev) => ({ ...prev, step2: true }));

			try {
				const contractSignerID = contractSigner.id ? contractSigner.id : contractSigner;
				const token = localStorage.getItem('token');

				setEmailSent(true);
				const res = await axios.put(
					`${BASE_URL}${END_POINT.CONTRACT}/${props.chosenContract.contract_id}`,
					{
						signer_user: contractSignerID,
					},
					{
						headers: { Authorization: token },
					},
				);

				if (res.status === 200) {
					dispatch(actionSnackBar.setSnackBar('success', 'Contract successfully updated', 2000));
				}
			} catch (err) {
				dispatch(actionSnackBar.setSnackBar('error', 'Failed to create a contract', 2000));
			}
		} else {
			if (!signerInputValue) {
				dispatch(
					actionSnackBar.setSnackBar('error', 'Please choose a recipient for the email', 1000),
				);
			}

			if (!props.activeSidebar) {
				dispatch(actionSnackBar.setSnackBar('error', 'Please finish update first', 1000));
			}
		}
	};

	const handleDone = () => {
		dispatch(changeChosenCompany(null));
		history.push('/companies');
	};

	const presentPDFContract = async () => {
		setLoadingPDF(true);

		try {
			const token = localStorage.getItem('token');

			const res = await axios.get(
				`${BASE_URL}${END_POINT.CONTRACT}/pdf/${props.chosenContract.contract_id}`,
				{
					headers: { Authorization: token, Accept: 'application/pdf' },
				},
			);

			if (res.status === 200) {
				const pdfString = res.data.pdf;

				const byteCharacters = window.atob(pdfString);
				const byteNumbers = new Array(byteCharacters.length);

				for (let i = 0; i < byteCharacters.length; i++) {
					byteNumbers[i] = byteCharacters.charCodeAt(i);
				}

				const byteArray = new Uint8Array(byteNumbers);
				const file = new Blob([byteArray], { type: 'application/pdf;base64' });
				const fileURL = URL.createObjectURL(file);

				setLoadingPDF(false);
				window.open(fileURL);

				dispatch(actionSnackBar.setSnackBar('success', 'Contract successfully created', 2000));
			}
		} catch (err) {
			setLoadingPDF(false);
			dispatch(actionSnackBar.setSnackBar('error', 'Failed to create a contract', 2000));
		}
	};

	return (
		<SideFormView
			activeSidebar={props.activeSidebar}
			loadingSidebar={props.loadingSidebar}
			presentPDFContract={presentPDFContract}
			chosenCompany={chosenCompany}
			contractSigner={contractSigner}
			handleChange={handleChange}
			signerInputValue={signerInputValue}
			setSignerInputValue={setSignerInputValue}
			sendEmail={sendEmail}
			emailSent={emailSent}
			validationResult={validationResult}
			handleDone={handleDone}
			loadingPDF={loadingPDF}
		/>
	);
};

SideForm.displayName = 'SideForm';
SideForm.defaultProps = {};

export default React.memo(SideForm);
