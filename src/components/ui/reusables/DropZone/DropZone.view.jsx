import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { useDropzone } from 'react-dropzone';
import { useStyles } from '../../../../styles/AuthorsStyles';
import { DeleteButton } from '../../../../styles/MainStyles';
import { ReactComponent as ImageIcon } from '../../../../assets/icons/iconImage.svg';
import { BASE_URL, END_POINT } from '../../../../utils/constants';

const DropZoneView = (props) => {
	const classes = useStyles();

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: props.onDrop,
		accept: props.fileTypes,
	});

	return (
		<Grid container justifyContent="center" {...getRootProps()} className={classes.uploadImage}>
			<Grid item xs={12}>
				<input {...getInputProps()} />
				<label htmlFor="coverImg">
					<Grid
						container
						justifyContent="center"
						alignItems="center"
						className={
							props.uploadedImage
								? `${classes.coverImg} ${classes.imageSpace}`
								: `${classes.noCoverImg} ${classes.imageSpace}`
						}
						style={
							props.uploadedImage
								? {
										backgroundImage: `url(${BASE_URL}${
											END_POINT.ASSETS
										}/${encodeURIComponent(props.uploadedImage.file_name_system)})`,
								  }
								: {}
						}
					>
						{props.uploadedImage ? null : <ImageIcon style={{ width: '50px' }} />}
					</Grid>
				</label>
			</Grid>
			{isDragActive ? (
				<Typography>Drop the file here ...</Typography>
			) : props.uploadedImage ? (
				<Grid item xs={12}>
					<Grid container justifyContent="center" alignItems="center" style={{ marginTop: 10 }}>
						<Typography
							className={classes.uploadText}
							style={props.uploadedImage ? { marginRight: '10px' } : null}
						>
							{typeof props.uploadedImage === 'string'
								? props.uploadedImage.length > 20
									? `${props.uploadedImage.slice(0, 20)}...`
									: props.uploadedImage
								: props.uploadedImage.file_name?.length > 20
								? `${props.uploadedImage.file_name.slice(0, 20)}...`
								: props.uploadedImage.file_name}
						</Typography>
						<DeleteButton disableRipple onClick={props.deleteFile}>
							<ClearIcon className={classes.clearIcon} />
						</DeleteButton>
					</Grid>
				</Grid>
			) : (
				<Grid item xs={12} style={{ marginTop: -20 }}>
					<Grid container justifyContent="center">
						<Grid item>
							<Typography className={classes.uploadLink}>Upload</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.uploadText}>
								&nbsp;
								{props.purpose}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.onlyPng}>.jpg, .png, .svg .jfif .webp</Typography>
						</Grid>
					</Grid>
				</Grid>
			)}
		</Grid>
	);
};

DropZoneView.displayName = 'DropZoneView';
DropZoneView.defaultProps = {};

export default React.memo(DropZoneView);
