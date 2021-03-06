import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { BASE_URL, END_POINT } from '../../../../../utils/constants';

import MorePublicationsView from './MorePublications.view';

const MorePublications = (props) => {
	const localCatNames = props.categories?.map((cat) => cat.name);
	const [morePub, setMorePub] = useState(null);

	const getMorePublicationAsync = async () => {
		try {
			const token = localStorage.getItem('token');

			const resp = await axios.get(`${BASE_URL}${END_POINT.PUBLICATION}/user`, {
				headers: { Authorization: token },
			});

			if (resp.status === 200) {
				let filterdPublication = resp.data
					.filter((pub) => {
						const categoriesNames = pub.categories?.map((category) => category.name);

						return categoriesNames.includes(localCatNames[0]);
					})
					.slice(0, 3);

				filterdPublication = filterdPublication.filter((pub) => pub.title !== props.title);

				if (filterdPublication.length > 0) {
					setMorePub(filterdPublication);
				} else {
					setMorePub(resp.data.slice(0, 3));
				}
			}
		} catch (err) {
			/* eslint no-console: "off" */
			console.log(err);
		}
	};

	useEffect(() => {
		getMorePublicationAsync();
	}, []);

	return <MorePublicationsView morePup={morePub} />;
};

MorePublications.displayName = 'MorePublications';
MorePublications.defaultProps = {};

export default React.memo(MorePublications);
