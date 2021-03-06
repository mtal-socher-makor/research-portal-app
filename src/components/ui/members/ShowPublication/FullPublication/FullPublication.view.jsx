import React from 'react';
// eslint-disable-next-line no-unused-vars
import { CircularProgress, Grid, IconButton } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import AuthorInfo from '../AuthorInfo/AuthorInfo';
import Title from '../Title/Title';
import Content from '../Content/Content';
import Events from '../Events/Events';
import Attachments from '../Attachments/Attachments';
import Comments from '../Comments/Comments';
import MorePublications from '../MorePublications/MorePublications';
import VideoFrame from '../VideoFrame/VideoFrame';
import PdfViewer from '../PdfViewer/PdfViewer';

const FullPublicationView = (props) => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			style={{ paddingTop: 30, position: 'relative', minHeight: '70vh' }}
		>
			{props.loadingPub && (
				<Grid item xs={12} align="center" style={{ height: 'calc(100vh - 539px)' }}>
					<CircularProgress size={40} thickness={4} value={100} style={{ marginTop: '8%' }} />
				</Grid>
			)}
			{props.chosenPublication && !props.loadingPub && (
				<>
					<Grid item xs={5}>
						<Grid container>
							<Title
								title={props.chosenPublication.title}
								description={props.chosenPublication.description}
							/>

							<AuthorInfo
								auther={props.chosenPublication.author}
								lastDate={
									props.chosenPublication.updated_at
										? props.chosenPublication.updated_at
										: props.chosenPublication.created_at
								}
							/>
							{props.chosenPublication.type === 'live' ? (
								<>
									<Content contentBlocks={props.chosenPublication.content} />
									<Events events={props.chosenPublication.events} />
									<Attachments attachments={props.chosenPublication.attachments} />
								</>
							) : props.chosenPublication.file_pdf ? (
								<PdfViewer
									pdf={{
										title_pdf: props.chosenPublication.title_pdf,
										file_pdf: props.chosenPublication.file_pdf,
									}}
								/>
							) : props.chosenPublication.link_video ? (
								<VideoFrame
									video={{
										title_video: props.chosenPublication.title_video,
										link_video: props.transformVideoLink(
											props.chosenPublication.link_video,
										),
									}}
								/>
							) : null}
							{(props.chosenPublication.commments !== null ||
								props.chosenPublication.commments !== undefined) &&
							props.userType !== 'author' ? (
								<Comments
									comments={props.chosenPublication.comments}
									pubId={props.chosenPublication.id}
								/>
							) : null}
							{(props.chosenPublication.categories !== null ||
								props.chosenPublication.categories !== undefined) &&
							props.userType !== 'author' ? (
								<MorePublications
									categories={props.chosenPublication.categories}
									title={props.chosenPublication.title}
								/>
							) : null}
						</Grid>
					</Grid>
				</>
			)}

			{/* {!props.loadingPub && (
				<IconButton
					style={{
						backgroundColor: '#868DA2',
						height: 73,
						width: 73,
						position: 'absolute',
						bottom: '160px',
						right: '430px',
					}}
					onClick={() => window.scroll(0, 0)}
				>
					<ExpandLessIcon fontSize="large" style={{ color: '#ffffff' }} />
				</IconButton>
			)} */}
		</Grid>
	);
};

FullPublicationView.displayName = 'FullPublicationView';
FullPublicationView.defaultProps = {};

export default React.memo(FullPublicationView);
