import { isValid, format } from 'date-fns';

export const validateCompany = (fieldValues, errors, setErrors, setValidationResult, company) => {
	const temp = { ...errors };

	if ('name' in fieldValues) {
		temp.name = fieldValues.name ? '' : 'This field is required';
	}

	if ('type' in fieldValues) {
		temp.type = fieldValues.type.length > 0 ? '' : 'This field is required';
	}

	if ('country' in fieldValues) {
		temp.country = fieldValues.country ? '' : 'This field is required';
	}

	if ('start_at' in fieldValues) {
		if (fieldValues['start_at']) {
			temp['start_at'] = '';
		} else {
			temp['start_at'] = 'This field is required';
		}

		if (isValid(new Date(fieldValues['start_at']))) {
			temp['start_at'] = '';
		} else {
			temp['start_at'] = 'Date is invalid';
		}
	}

	if ('end_at' in fieldValues) {
		if (fieldValues['end_at']) {
			temp['end_at'] = '';
		} else {
			temp['end_at'] = 'This field is required';
		}

		if (isValid(new Date(fieldValues['end_at']))) {
			temp['end_at'] = '';
		} else {
			temp['end_at'] = 'Date is invalid';
		}
	}

	if ('start_at' in temp && 'end_at' in fieldValues) {
		if (
			isValid(new Date(company['start_at'])) &&
			isValid(new Date(fieldValues['end_at'])) &&
			company['start_at'].getTime() > fieldValues['end_at'].getTime()
		) {
			temp['end_at'] = 'End date must be later than start date';
		} else {
			temp['end_at'] = '';
		}
	}

	setErrors({ ...temp });
	const allFields =
		company.type === 'prospect'
			? ['name', 'country', 'type', 'start_at', 'end_at']
			: ['name', 'country', 'type', 'start_at'];

	const tempResult1 = allFields.every((field) => Object.keys(temp).includes(field));
	const tempResult2 = Object.values(temp).every((x) => x === '');

	const result = tempResult1 && tempResult2;

	setValidationResult(result);
};

export const validateUserInformation = (fieldValues, errors, setErrors, setValidationResult) => {
	const temp = { ...errors };

	if ('name' in fieldValues) {
		temp.name = fieldValues.name ? '' : 'This field is required';
	}

	if ('dialing_code' in fieldValues) {
		temp.dialing_code = fieldValues.dialing_code ? '' : 'This field is required';
	}

	if ('number' in fieldValues) {
		temp.number = fieldValues.number ? '' : 'This field is required';
	}

	if ('email' in fieldValues) {
		const pattern =
			/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (fieldValues.email) {
			temp.email = '';
		} else {
			temp.email = 'This field is required';
		}

		if (fieldValues.email && pattern.test(fieldValues.email.toLowerCase())) {
			temp.email = '';
		} else {
			temp.email = 'Email is invalid';
		}
	}

	if ('position' in fieldValues) {
		temp.position = fieldValues.position ? '' : 'This field is required';
	}

	if ('username' in fieldValues) {
		temp.username = fieldValues.username ? '' : 'This field is required';
	}

	if ('birthday' in fieldValues) {
		temp.birthday = fieldValues.birthday ? '' : 'This field is required';

		if (isValid(new Date(fieldValues.birthday))) {
			temp.birthday = '';

			if (!fieldValues.birthday) {
				temp.birthday = 'This field is required';
			}
		} else {
			temp.birthday = 'Date is invalid';
		}
	}

	setErrors({ ...temp });
	const result = Object.values(temp).every((x) => x === '');

	setValidationResult(result);
};

export const validateChangedPassword = (
	fieldValues,
	errors,
	setErrors,
	setValidationResult,
	newPassword,
	newPasswordConfirm,
	handler,
) => {
	const temp = { ...errors };

	if ('old_password' in fieldValues) {
		temp['old_password'] = fieldValues['old_password'] ? '' : 'This field is required';
	}

	if ('new_password' in fieldValues) {
		if (!('new_password_confirm' in temp)) {
			temp['new_password'] = fieldValues['new_password'] ? '' : 'This field is required';
		} else {
			temp['new_password'] =
				fieldValues['new_password'] ===
				newPasswordConfirm.substring(0, fieldValues.new_password.length)
					? ''
					: 'New password and confirm password do not match';
		}
		//upon submission, make another equlity check of new and confirm, this time with the full strings

		if (handler === 'submit') {
			temp['new_password'] =
				fieldValues['new_password'] === newPasswordConfirm
					? ''
					: 'New password and confirm password do not match';
		}
	}

	if ('new_password_confirm' in fieldValues) {
		if (
			fieldValues.new_password_confirm ===
			newPassword.substring(0, fieldValues.new_password_confirm.length)
		) {
			temp['new_password_confirm'] = '';
		} else {
			temp['new_password_confirm'] = 'New password and confirm password do not match';
		}
	}

	setErrors({ ...temp });
	const allFields = ['old_password', 'new_password', 'new_password_confirm'];
	const tempResult1 = allFields.every((field) => Object.keys(temp).includes(field));
	const tempResult2 = Object.values(temp).every((x) => x === '');

	const result = tempResult1 && tempResult2;

	setValidationResult(result);

	return result;
};

export const validateMember = (fieldValues, errors, setErrors, setValidationResult) => {
	const temp = { ...errors };
	const someFields = ['member_name', 'username', 'position'];
	const allFields = ['member_name', 'username', 'email', 'position', 'categories'];

	someFields.forEach((field) => {
		if (field in fieldValues) {
			temp[field] = fieldValues[field] ? '' : 'This field is required';
		}
	});

	if ('email' in fieldValues) {
		const pattern =
			/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (fieldValues.email) {
			temp.email = '';
		} else {
			temp.email = 'This field is required';
		}

		if (fieldValues.email && pattern.test(fieldValues.email.toLowerCase())) {
			temp.email = '';
		} else {
			temp.email = 'Email is invalid';
		}
	}

	if ('categories' in fieldValues) {
		temp.categories = fieldValues.categories.length >= 1 ? '' : 'This field is required';
	}

	setErrors({ ...temp });
	const tempResult1 = allFields.every((field) => Object.keys(temp).includes(field));
	const tempResult2 = Object.values(temp).every((x) => x === '');
	//const tempResult3 = (company.members > 1) && ()

	const result = tempResult1 && tempResult2;

	setValidationResult(result);
};

export const validateContract = (fieldValues, errors, setErrors, setValidationResult) => {
	const temp = { ...errors };
	const someFields = ['currency', 'amount', 'periodicity', 'members'];
	const allFields = ['sales', 'currency', 'amount', 'periodicity', 'members'];

	someFields.forEach((field) => {
		if (field in fieldValues) {
			temp[field] = fieldValues[field] ? '' : 'This field is required';
		}
	});

	temp['sales'] = '';

	if ('sales' in fieldValues) {
		temp.sales = fieldValues.sales ? '' : 'This field is required';
	}

	temp['start_at'] = '';

	if ('start_at' in fieldValues) {
		temp.start_at = fieldValues.start_at ? '' : 'This field is required';

		if (isValid(new Date(fieldValues.start_at))) {
			temp.start_at = '';

			if (!fieldValues.start_at) {
				temp.start_at = 'This field is required';
			}
		} else {
			temp.start_at = 'Date is invalid';
		}
	}

	setErrors({ ...temp });
	const tempResult1 = allFields.every((field) => Object.keys(temp).includes(field));
	const tempResult2 = Object.values(temp).every((x) => x === '');
	const result = tempResult1 && tempResult2;

	setValidationResult(result);
};

export const validateEditedContract = (fieldValues, errors, setErrors, setValidationResult) => {
	const temp = { ...errors };
	const someFields = ['currency', 'amount', 'periodicity', 'members'];

	someFields.forEach((field) => {
		if (field in fieldValues) {
			temp[field] = fieldValues[field] ? '' : 'This field is required';
		}
	});

	temp['sales'] = '';

	if ('sales' in fieldValues) {
		temp.sales = fieldValues.sales ? '' : 'This field is required';
	}

	temp['start_at'] = '';

	if ('start_at' in fieldValues) {
		temp.start_at = fieldValues.start_at ? '' : 'This field is required';

		if (isValid(new Date(fieldValues.start_at))) {
			temp.start_at = '';

			if (!fieldValues.start_at) {
				temp.start_at = 'This field is required';
			}
		} else {
			temp.start_at = 'Date is invalid';
		}
	}

	setErrors({ ...temp });
	const result = Object.values(temp).every((x) => x === '');

	setValidationResult(result);
};

export const validateLogin = (fieldValues, errors, setErrors, validationResult, setValidationResult) => {
	const temp = { ...errors };
	const allFields = ['username', 'password'];

	if ('username' in fieldValues) {
		temp['username'] = fieldValues['username'] ? '' : 'This field is required';
	}

	if ('password' in fieldValues) {
		if (fieldValues['password']) {
			temp['password'] = '';
		} else {
			temp['password'] = 'This field is required';
		}

		if (fieldValues['password'] && fieldValues['password'].length >= 6) {
			temp['password'] = '';
		} else {
			temp['password'] = 'Password is too short';
		}
	}

	setErrors({ ...temp });
	const tempResult1 = allFields.every((field) => Object.keys(temp).includes(field));
	const tempResult2 = Object.values(temp).every((x) => x === '');

	const result = tempResult1 && tempResult2;

	setValidationResult(result);
};

export const validateProspectTrial = (fieldValues, errors, setErrors, trial) => {
	const temp = { ...errors };

	if ('sales_agent' in fieldValues) {
		temp.sales_agent = fieldValues.sales_agent ? '' : 'This field is required';
	}

	if ('start_at' in fieldValues) {
		if (fieldValues['start_at']) {
			temp['start_at'] = '';
		} else {
			temp['start_at'] = 'This field is required';
		}

		if (isValid(new Date(fieldValues['start_at']))) {
			temp['start_at'] = '';
		} else {
			temp['start_at'] = 'Date is invalid';
		}
	}

	if ('end_at' in fieldValues) {
		if (fieldValues['end_at']) {
			temp['end_at'] = '';
		} else {
			temp['end_at'] = 'This field is required';
		}

		if (isValid(new Date(fieldValues['end_at']))) {
			temp['end_at'] = '';
		} else {
			temp['end_at'] = 'Date is invalid';
		}
	}

	if ('start_at' in fieldValues && 'end_at' in trial) {
		if (
			isValid(new Date(fieldValues['start_at'])) &&
			isValid(new Date(trial['end_at'])) &&
			new Date(trial['end_at']) < new Date(fieldValues['start_at'])
		) {
			temp['start_at'] = `Min.date is ${format(new Date(trial['end_at']), 'dd/MM/yyyy')}`;
			temp['end_at'] = '';
		} else {
			temp['start_at'] = '';
			temp['end_at'] = '';
		}
	}

	if ('end_at' in fieldValues && 'start_at' in trial) {
		if (
			isValid(new Date(fieldValues['end_at'])) &&
			isValid(new Date(trial['start_at'])) &&
			new Date(trial['start_at']) > new Date(fieldValues['end_at'])
		) {
			temp['end_at'] = `Min.date is ${format(new Date(trial['start_at']), 'dd/MM/yyyy')}`;
			temp['start_at'] = '';
		} else {
			temp['end_at'] = '';
			temp['start_at'] = '';
		}
	}

	setErrors({ ...temp });
};

export const validateUser = (fieldValues, errors, setErrors, setValidationResult) => {
	const temp = { ...errors };
	const someFields = ['name', 'username', 'country'];
	const allFields = ['name', 'username', 'email', 'country'];

	someFields.forEach((field) => {
		if (field in fieldValues) {
			temp[field] = fieldValues[field] ? '' : 'This field is required';
		}
	});

	if ('email' in fieldValues) {
		const pattern =
			/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (fieldValues.email) {
			temp.email = '';
		} else {
			temp.email = 'This field is required';
		}

		if (fieldValues.email && pattern.test(fieldValues.email.toLowerCase())) {
			temp.email = '';
		} else {
			temp.email = 'Email is invalid';
		}
	}

	setErrors({ ...temp });
	const tempResult1 = allFields.every((field) => Object.keys(temp).includes(field));
	const tempResult2 = Object.values(temp).every((x) => x === '');

	const result = tempResult1 && tempResult2;

	setValidationResult(result);
};

export const validateDeadPublication = (
	fieldValues,
	errors,
	setErrors,
	setValidationResult,
	selectedValue,
) => {
	const temp = { ...errors };
	const someFields = ['title', 'description'];

	if (selectedValue === 'video') {
		delete temp.title_pdf;
		delete temp.file_pdf;
	} else if (selectedValue === 'pdf') {
		delete temp.title_video;
		delete temp.link_video;
	}

	// const allFields =
	// 	selectedValue === 'pdf'
	// 		? ['title', 'description', 'categories', 'title_pdf', 'file_pdf']
	// 		: ['title', 'description', 'categories', 'title_video', 'link_video'];

	//coverImage is validated independently, not here
	//event date is validated independently, not here

	someFields.forEach((field) => {
		if (field in fieldValues) {
			temp[field] = fieldValues[field] ? '' : 'This field is required';

			if (temp[field] === '') {
				setValidationResult((prev) => ({ ...prev, [field]: true }));
			} else {
				setValidationResult((prev) => ({ ...prev, [field]: false }));
			}
		}
	});

	if ('categories' in fieldValues) {
		temp.categories = fieldValues.categories.length >= 1 ? '' : 'This field is required';

		if (temp.categories === '') {
			setValidationResult((prev) => ({ ...prev, categories: true }));
		} else {
			setValidationResult((prev) => ({ ...prev, categories: false }));
		}
	}

	if (selectedValue === 'pdf') {
		if ('title_pdf' in fieldValues) {
			temp.title_pdf = fieldValues.title_pdf ? '' : 'This field is required';

			if (temp.title_pdf === '') {
				setValidationResult((prev) => ({ ...prev, title_pdf: true }));
			} else {
				setValidationResult((prev) => ({ ...prev, title_pdf: false }));
			}
		}

		if ('file_pdf' in fieldValues) {
			temp.file_pdf = fieldValues.file_pdf ? '' : 'This field is required';

			if (temp.file_pdf === '') {
				setValidationResult((prev) => ({ ...prev, file_pdf: true }));
			} else {
				setValidationResult((prev) => ({ ...prev, file_pdf: false }));
			}
		}
	}

	if (selectedValue === 'video') {
		if ('title_video' in fieldValues) {
			temp.title_video = fieldValues.title_video ? '' : 'This field is required';

			if (temp.title_video === '') {
				setValidationResult((prev) => ({ ...prev, title_video: true }));
			} else {
				setValidationResult((prev) => ({ ...prev, title_video: false }));
			}
		}

		if ('link_video' in fieldValues) {
			temp.link_video = fieldValues.link_video ? '' : 'This field is required';

			if (temp.link_video === '') {
				setValidationResult((prev) => ({ ...prev, link_video: true }));
			} else {
				setValidationResult((prev) => ({ ...prev, link_video: false }));
			}
		}
	}

	setErrors({ ...temp });
	// const tempResult1 = allFields.every((field) => Object.keys(temp).includes(field));
	// const tempResult2 = Object.values(temp).every((x) => x === '');

	// const result = tempResult1 && tempResult2;

	// setValidationResult(result);
};

// export const validateEditedDeadPublication = (
// 	fieldValues,
// 	errors,
// 	setErrors,
// 	setValidationResult,
// 	selectedValue,
// ) => {
// 	const temp = { ...errors };
// 	const someFields = ['title', 'description'];

// 	someFields.forEach((field) => {
// 		if (field in fieldValues) {
// 			temp[field] = fieldValues[field] ? '' : 'This field is required';
// 		}
// 	});

// 	if ('categories' in fieldValues) {
// 		temp.categories = fieldValues.categories.length >= 1 ? '' : 'This field is required';
// 	}

// 	if (selectedValue === 'pdf') {
// 		if ('title_pdf' in fieldValues) {
// 			temp.title_pdf = fieldValues.title_pdf ? '' : 'This field is required';
// 		}

// 		if ('file_pdf' in fieldValues) {
// 			temp.file_pdf = fieldValues.file_pdf ? '' : 'This field is required';
// 		}
// 	}

// 	if (selectedValue === 'video') {
// 		if ('title_video' in fieldValues) {
// 			temp.title_video = fieldValues.title_video ? '' : 'This field is required';
// 		}

// 		if ('link_video' in fieldValues) {
// 			temp.link_video = fieldValues.link_video ? '' : 'This field is required';
// 		}
// 	}

// 	setErrors({ ...temp });
// 	const result = Object.values(temp).every((x) => x === '');

// 	setValidationResult(result);
// };

export const validateLivePublication = (fieldValues, errors, setErrors, setValidationResult) => {
	const temp = { ...errors };
	//const allFields = ['title', 'categories'];

	//coverImage, event date, content are validated independently, not here

	if ('title' in fieldValues) {
		temp.title = fieldValues['title'] ? '' : 'This field is required';

		if (temp.title === '') {
			setValidationResult((prev) => ({ ...prev, title: true }));
		} else {
			setValidationResult((prev) => ({ ...prev, title: false }));
		}
	}

	if ('categories' in fieldValues) {
		temp.categories = fieldValues.categories.length >= 1 ? '' : 'This field is required';

		if (temp.categories === '') {
			setValidationResult((prev) => ({ ...prev, categories: true }));
		} else {
			setValidationResult((prev) => ({ ...prev, categories: false }));
		}
	}

	setErrors({ ...temp });
};

export const validateEvent = (fieldValues, errors, setErrors, setValidationResult) => {
	const temp = { ...errors };

	const allFields = ['title', 'date'];

	if ('title' in fieldValues) {
		temp.title = fieldValues.title ? '' : 'This field is required';
	}

	if ('date' in fieldValues) {
		temp.date = fieldValues.date ? '' : 'This field is required';

		if (isValid(new Date(fieldValues.date))) {
			temp.date = '';

			if (!fieldValues.date) {
				temp.date = 'This field is required';
			}
		} else {
			temp.date = 'Date is invalid';
		}
	}

	setErrors({ ...temp });
	const tempResult1 = allFields.every((field) => Object.keys(temp).includes(field));
	const tempResult2 = Object.values(temp).every((x) => x === '');

	const result = tempResult1 && tempResult2;

	setValidationResult(result);
};
