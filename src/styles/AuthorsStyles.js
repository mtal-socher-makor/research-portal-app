import { makeStyles, withStyles, TextField } from '@material-ui/core';
//import { CenterFocusStrong } from '@material-ui/icons';

export const useStyles = makeStyles((theme) => ({
	newArticleContainer: {
		marginTop: '4.3vh',
		[theme.breakpoints.up('md')]: {
			height: 'fit-content',
		},
	},
	newArticleWrapper: {
		height: 'content-fit',
	},
	marginBottom35: {
		marginBottom: '35px',
	},
	marginTop15: {
		marginTop: '15px',
	},
	marginTop25: {
		marginTop: '25px',
	},
	mainArticleTitle: {
		fontSize: '36px',
		marginBottom: '30px',
	},
	uploadGrid: {
		border: '1px dashed #000000',
		padding: '15px',
	},
	uploadBtn: {
		'margin': '10px',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	uploadLink: {
		textTransform: 'none',
		padding: '0px',
		fontSize: '16px',
		color: '#1C67FF',
		textDecoration: 'underline',
		cursor: 'pointer',
	},
	uploadText: {
		textTransform: 'none',
		padding: '0px',
		fontSize: '16px',
		color: '#868DA2',
	},
	onlyPng: {
		color: '#868DA2',
		textAlign: 'center',
		fontSize: '14px',
	},
	fileType: {
		backgroundColor: '#edeff3',
		marginRight: 10,
		borderRadius: '50%',
		padding: '12px 12px',
	},
	plusIcon: {
		'paddingLeft': 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	eventContainer: {
		marginBottom: '15px',
	},
	datePicker: {
		marginRight: '15px',
	},
	textField: {
		width: '100%',
	},
	marginLeft15: {
		marginLeft: '15px',
	},
	addIcon: {
		fill: '#FFFFFF',
		fontSize: '20px',
	},
	addIconDisabled: {
		fill: 'grey',
	},
	attachIcon: {
		width: '24px',
		marginBottom: '10px',
	},
	maxSize: {
		fontSize: '14px',
		color: '#999999',
	},
	chipContainer: {
		marginTop: '10px',
	},
	chipItem: {
		marginBottom: '5px',
		marginRight: '3px',
	},
	hashtagsContainer: {
		marginTop: '16px',
	},
	hashtag: {
		color: 'blue',
	},
	clearHashtag: {
		fontSize: '13px',
	},
	clearHashtagBtn: {
		padding: '4px',
	},
	oneHashtag: {
		marginRight: '7px',
	},
	eventDatePicker: {
		'width': '100%',
		'height': '43px',
		'& .MuiOutlinedInput-root': {
			'borderRadius': '8px',
			'& fieldset': {
				borderColor: '#A5AFC233',
			},
			'&:hover fieldset': {
				border: '1px solid #A5AFC233',
			},
			'&.Mui-focused fieldset': {
				border: '1px solid #A5AFC233',
			},
		},
		'& .MuiInputBase-root': {
			'& .MuiButtonBase-root': {
				'paddingRight': 0,
				'&:hover': {
					'backgroundColor': 'transparent',
					'&:focused': {
						backgroundColor: 'transparent',
					},
				},
			},
			'& .MuiInputBase-input': {
				'padding': '11px',
				'paddingRight': 0,
				'&::placeholder': {
					color: '#868DA2',
					opacity: 1,
				},
			},
		},
		'& .MuiIconButton-root': {
			padding: 0,
		},
		'& .MuiOutlinedInput-adornedEnd': {
			paddingRight: '8px',
		},
		'& .MuiFormHelperText-root': {
			'marginLeft': 2,
			'marginTop': 0,
			'&.Mui-error': {
				color: '#FF0221',
				fontSize: 11,
				fontWeight: 500,
			},
		},
	},
	blueShape: {
		backgroundColor: '#1C67FF',
		borderRadius: '8px',
		height: '12px',
		marginBottom: '10px',
	},
	writeNewTitle: {
		color: '#868DA2',
		fontSize: '24px',
	},
	newArticleLeftContainer: {
		height: 'fit-content',
	},
	newArticleRightContainer: {
		'position': 'relative',
		'alignContent': 'space-between',
		[theme.breakpoints.up('md')]: {
			marginLeft: '16px',
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: '20px',
		},
		'height': '100%',
		'width': 'inherit',
		'border': '1px solid #EDEFF3',
		'borderRadius': '8px 8px 8px 8px',
		'padding': '24px 24px 0px 24px ',
		'minHeight': '700px',
		//'overflow': 'auto',
		'&::-webkit-scrollbar': {
			width: '3px',
			height: '3px',
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 5px #FFFFFF',
			borderRadius: '10px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'grey',
			borderRadius: '10px',
		},
	},
	articleTitleLive: {
		'width': '100%',
		'minHeight': 83,
		'& input': {
			fontWeight: 'normal !important',
			paddingLeft: '15px !important',
			paddingTop: '15px !important',
			paddingBottom: '15px !important',
		},
	},
	deadArticlePage: {
		paddingTop: 20,
	},
	subheaderContainer: {
		marginBottom: 16,
	},
	rightForm: {
		height: 'contentFit',
	},
	deadFormHolder: {
		borderRadius: '8px',
		border: '1px solid #EDEFF3',
		flexWrap: 'nowrap',
		padding: '40px',
		maxWidth: 850,
		marginLeft: '10%',
		[theme.breakpoints.down('md')]: {
			margin: 0,
		},
	},
	deadImageHolder: {
		[theme.breakpoints.down('lg')]: {
			justifyContent: 'center',
		},
	},
	uploadImage: {
		borderRadius: '8px',
		border: '1px solid #EDEFF3',
		padding: '10px',
		minHeight: '122px',
		marginBottom: '8px',
	},
	subHeaderRight: {
		color: '#868DA2',
		fontSize: '16px',
		[theme.breakpoints.down('lg')]: {
			marginBottom: 16,
		},
	},
	autoCompletesContainer: {
		marginBottom: '16px',
	},
	divider: {
		backgroundColor: '#EDEFF3',
		height: '1px',
		width: '100%',
	},
	uploadAttachment: {
		borderRadius: '8px',
		border: '1px solid #EDEFF3',
		padding: '10px',
		minHeight: '120px',
	},
	autoCompleteChips: {},
	tagsInputContainer: {
		marginTop: '16px',
	},
	dateStyle: {
		'& .MuiOutlinedInput-input': {
			padding: '10.6px',
		},
		'& .MuiOutlinedInput-adornedEnd': {
			borderRadius: '8px',
			padding: 0,
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#A5AFC233',
		},
	},
	calendarIcon: {
		'& g': {
			'& path': {
				stroke: '#1C67FF',
			},
		},
	},
	descriptionStyle: {
		'& .MuiOutlinedInput-multiline': {
			padding: 11,
		},
	},
	clearIcon: {
		fontSize: '15px',
		fill: '#868DA2',
	},
	chip: {
		backgroundColor: '#EDEFF3',
	},
	chipClear: {
		width: '17px',
		height: '17px',
	},
	muiEditor: {
		MUIRichTextEditor: {
			root: {
				'width': '100%',
				//minHeight: '70vh',
				'&.MuiIconButton-root': {
					color: 'red',
				},
			},
			toolbar: {
				display: 'flex',
				justifyContent: 'space-between',
			},

			editor: {
				'border': '2px solid #A5AFC233',
				'borderRadius': '8px',
				'padding': '10px',
				'height': '630px',
				'lineHeight': 1.5,
				'maxHeight': '630px',
				'overflow': 'auto',
				'&::-webkit-scrollbar': {
					width: '3px',
					height: '3px',
				},
				'&::-webkit-scrollbar-track': {
					boxShadow: 'inset 0 0 5px #FFFFFF',
					borderRadius: '10px',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: 'grey',
					borderRadius: '10px',
				},
			},
			placeHolder: {
				padding: 10,
			},
		},
	},
	buttonsContainer: {
		marginLeft: '16px',
		padding: '17px',
		minHeight: '75px',
		maxHeight: '120px',
		borderTop: 'none',
		borderRadius: '0px 0px 8px 8px',
	},
	duoButtons: {
		alignContent: 'space-between',
		[theme.breakpoints.down('lg')]: {
			height: 100,
		},
	},
	draftLink: {
		//'fontFamily': 'Roboto',
		'color': '#1C67FF',
		'fontSize': 16,
		'textDecoration': 'underline',
		'fontWeight': 'bold',
		'&:hover': {
			cursor: 'pointer',
		},
		[theme.breakpoints.down('lg')]: {
			marginBottom: 16,
		},
	},
	imgWrapper: {
		marginBottom: 5,
		minHeight: 230,
	},
	imageSpace: {
		width: '100%',
		height: 130,
		cursor: 'pointer',
	},
	coverImg: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	previewLink: {
		textDecorationLine: 'none !important',
		// '& span': {
		// },
	},
	publishBtn: {
		width: 135,
	},
	previewBtn: {
		background: '#F3F7FF',
		border: 'none',
		width: 135,
	},
	attachmentLine: {
		marginTop: '15px',
	},
	radioTitle: {
		'& .MuiTypography-body1': {
			'fontSize': '20px',
			'fontFamily': 'inter',
			'fontWeight': 500,
			'& .disabled': {
				color: '#868DA2',
			},
		},
	},
	publishStyle: {
		'backgroundColor': '#1C67FF',
		'color': '#FFF',
		'borderRadius': '21px',
		'textTransform': 'capitalize',
		'width': '122px',
		'height': '40px',
		'fontSize': '16px',
		'&:hover': {
			backgroundColor: '#0044CD',
			boxShadow: '0px 6px 10px #00185829',
			transition: '.3s',
		},
		'&.Mui-disabled': {
			backgroundColor: '#ACB1BF',
			color: '#868DA2',
		},
	},
	saveDraft: {
		color: '#1C67FF',
		fontFamily: 'inter',
		fontWeight: 400,
		fontSize: '16px',
		borderRadius: '21px',
		border: '1px solid #1C67FF',
		backgroundColor: '#FFF',
		textTransform: 'capitalize',
	},
	cancelStyle: {
		'color': '#0F0F0F',
		'textDecorationLine': 'underline',
		'textTransform': 'capitalize',
		'fontSize': '16px',
		'&:hover': {
			backgroundColor: 'white',
			textDecorationLine: 'underline',
		},
		'disabledFile': {
			'& path': {
				fill: 'red',
			},
		},
	},
	radioStyle: {
		'& .MuiSvgIcon-root': {
			'color': '#1C67FF',
			'&:hover': {
				backgroundColor: '#EDEFF3',
			},
		},
	},
	disabledRadio: {
		'color': '#868DA2',
		'& .MuiTypography-body1': {
			fontSize: '20px',
		},
		'&:hover': {
			backgroundColor: '#EDEFF3',
		},
	},
	linkStyle: {
		'padding': 0,
		'& path': {
			fill: '#1C67FF',
		},
	},
	iconButton: {
		padding: 0,
	},
	padding0px: {
		padding: 0,
	},
	arrowStyle: {
		'padding': 1,
		'& path': {
			fill: '#868DA2',
		},
		'& .makeStyles-arrowStyle-240': {
			padding: 5,
		},
	},
	arrow2Style: {
		'& path': {
			'fill': '#1C67FF',
			'cursor': 'pointer',
			'& .disabled': {
				fill: '#868DA2',
			},
		},
		'& .makeStyles-iconButton-672': {
			padding: 2,
		},
	},
	coverImage: {
		color: '#0F0F0F',
		fontSize: '14px',
		fontFamily: 'inter',
	},
	coverGrid: {
		backgroundColor: '#EDEFF3',
		border: '1px solid #EDEFF3',
		borderRadius: '0 0 8px 8px',
		padding: 4,
	},
	reuploadStyle: {
		color: '#1C67FF',
		fontSize: '14px',
		textDecorationLine: 'underline',
		cursor: 'pointer',
	},
	pdfbtn: {
		'fontSize': '1rem',
		'fontWeight': '500',
		'color': '#868DA2',
		'padding': '5px 5px 4px 5px',
		'border': '2px solid #A5AFC233',
		'borderRadius': 8,
		'width': '100%',
		'justifyContent': 'flex-start',
		'textTransform': 'capitalize',
		'&:hover': {
			backgroundColor: '#fff',
		},
	},
	dropZone: {
		borderRadius: '8px',
		border: '1px solid #EDEFF3',
		minHeight: '158px',
		marginBottom: '5px',
		width: '260px',
		paddingTop: 18,
	},
	customError: {
		color: 'red',
		//marginLeft: 10,
		//position: 'absolute',
		//lineHeight: 4
		//marginBottom: 20,
	},
}));

export const AtricleTitleTextField = withStyles({
	root: {
		'width': '100%',
		'& .MuiOutlinedInput-root': {
			'borderRadius': '8px',
			'& fieldset': {
				border: '2px solid #EDEFF3',
			},
			'&:hover fieldset': {
				border: '2px solid #EDEFF3',
			},
			'&.Mui-focused fieldset': {
				border: '1px solid #EDEFF3',
			},

			'&.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
				borderColor: '#EDEFF3',
			},
		},
		'& .MuiFormHelperText-root': {
			color: (props) => props.inputProps.helpertextcolor,
		},

		'& .MuiOutlinedInput-input': {
			'padding': '11px',
			'&::placeholder': {
				color: '#868DA2',
				opacity: 1,
			},
		},
	},
})(TextField);

export const CustomTextField = withStyles((theme) => ({
	root: {
		'width': '100%',
		'& .MuiFormLabel-root': {
			color: theme.palette.input.placeholder,
		},
		'& .MuiOutlinedInput-root': {
			backgroundColor: theme.palette.background.main,
			borderRadius: 5,
		},
		'& .MuiOutlinedInput-inputMarginDense': {
			padding: '13px 8px',
		},
		'& .MuiOutlinedInput-adornedEnd': {
			paddingRight: 0,
		},
		'& .MuiInputBase-input': {
			// Text color

			color: theme.palette.text.main,
			fontSize: (props) => (props ? props.fontSize : '16px'),
			fontWeight: 400,
		},
		'& .MuiInput-underline:before': {
			// Semi-transparent underline
			borderBottom: `1px solid ${theme.palette.input.underline}`,
		},
		'& .MuiInput-underline:hover:before': {
			// Solid underline on hover
			borderBottom: `1px solid ${theme.palette.input.underline}`,
		},
		'& .MuiInput-underline:after': {
			// Solid underline on focus

			borderBottom: `1px solid ${theme.palette.button.main}`,
		},
		'& .MuiInput-underline.Mui-error:after': {
			borderBottom: `1px solid ${theme.palette.error.main}`,
		},
	},
}))(TextField);
