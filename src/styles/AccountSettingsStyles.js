import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	page: {
		marginTop: 20,
	},
	contentBox: {
		marginTop: 25,
		position: 'relative',
		height: 'calc(100vh - 220px)',
		minHeight: 560,
		border: '1px solid #A5AFC233',
		borderRadius: '8px',
	},
	sideBarWrapper: {},
	upperSection: {
		paddingTop: 10,
	},
	links: {},
	avatar: {
		height: 45,
	},
	divider: {
		margin: 'auto',
		width: '75%',
		marginBottom: '26px',
	},
	bottomSection: {
		marginTop: 200,
	},
	container: {},
	logout: {
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		color: '#FF3939',
		cursor: 'pointer',
	},
	sideBar: {
		height: '100%',
		maxWidth: '265px',
		minWidth: '205px',
		borderRadius: '8px',
		borderTop: '2px solid #A5AFC233',
		borderRight: '1px solid #A5AFC233',
		borderBottom: '2px solid #A5AFC233',
		backgroundColor: '#F6F9FC',
	},
	pageTitle: {
		paddingLeft: '8vw',
		flexWrap: 'nowrap',
	},
	chosenRoute: {
		padding: '30px 0 30px 0',
		color: '#1C67FF',
		backgroundColor: '#e0ebfc',
		cursor: 'pointer',
	},
	notChosen: {
		padding: '30px 0 30px 0',
		color: '#000000',
		backgroundColor: 'none',
		cursor: 'pointer',
	},
	iconOn: {
		display: 'flex',
		alignSelf: 'center',
		justifyContent: 'center',
		paddingInline: '24px 10px',
		color: '#1C67FF',
	},
	icon: {
		color: '#B8C3D8',
		display: 'flex',
		alignSelf: 'center',
		paddingInline: '24px 10px',
	},
}));
