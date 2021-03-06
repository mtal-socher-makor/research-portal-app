import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useStyles } from '../../../../../styles/AllNotificationStyle';
import ControlBar from '../ControlBar/ControlBar';
import NotificationBox from '../NotificationBox/NotificationBox';
import { ReactComponent as BlueShape } from '../../../../../assets/icons/blueBorder.svg';

const AllNotificationsView = (props) => {
	const classes = useStyles();

	return (
		<Grid container className={classes.page}>
			<Grid item xs={2} className={classes.sideColumn}>
				<Grid container className={classes.sideColumnContainer}>
					<Grid item>
						<BlueShape />
					</Grid>
					<Grid item>
						<Typography className={classes.pageTitle}>Notifications</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={6} className={classes.mainColumn}>
				<Grid container className={classes.mainColumnContainer}>
					<Grid item xs={12}>
						<ControlBar setSearchTerm={props.setSearchTerm} makeAllRead={props.makeAllRead} />
					</Grid>

					<Grid item xs={12}>
						<Grid container className={classes.notListContainer}>
							<InfiniteScroll
								dataLength={props.notifications.length}
								// next={props.getNotifications}
								hasMore
								loader={<h4>Loading...</h4>}
							>
								{props.filteredNotifications.length
									? props.filteredNotifications.map((item) => {
											const content = JSON.parse(item?.content);

											return (
												<NotificationBox
													key={item.id}
													content={content}
													isRead={item.is_read}
												/>
											);
									  })
									: null}
							</InfiniteScroll>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

AllNotificationsView.displayName = 'AllNotificationsView';
AllNotificationsView.defaultProps = {};

export default React.memo(AllNotificationsView);
