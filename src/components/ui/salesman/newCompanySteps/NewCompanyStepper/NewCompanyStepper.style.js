import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	dialogBox: {
		minWidth: 670,
	},
	dialogContainer: {
		paddingTop: 30,
	},
	container: {
		margin: '0 auto',
	},
	contractModalPaper: {
		minWidth: 'calc(100vw - 1100px)',
		minHeight: 'calc(100vh - 500px)',
	},
	modalBackDrop: {
		backdropFilter: 'blur(2px)',
		backgroundColor: '#00001e25',
	},
	stepperGroup: {
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	btnRow: {
		marginLeft: '10px',
		marginBottom: '20px',
		justifyContent: 'space-between',
		width: '100%',
	},
	buttonBack: {
		padding: '7px 40px',
		fontSize: 17,
	},
	buttonNext: {
		padding: '7px 80px',
		fontSize: 17,
	},
	instructions: {
		marginTop: -10,
		marginBottom: theme.spacing(1),
		flexDirection: 'column',
	},
	closeIcon: {
		cursor: 'pointer',
	},
}));

export default useStyles;
