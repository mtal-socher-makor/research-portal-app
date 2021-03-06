import { Grid, Divider } from '@material-ui/core';
import BigPublication from '../ui/members/PublicationsType/BigPublication/BigPublication';
import SmallPublication from '../ui/members/PublicationsType/SmallPublication/SmallPublication';
import MainPublication from '../ui/members/PublicationsType/MainPublication/MainPublication';
import MediumPublication from '../ui/members/PublicationsType/MediumPublication/MediumPublication';
import { useStyles } from '../../styles/PublicationsStyles';

const PublicationsGrid = (props) => {
	const big = 0;
	const small_indexes = [1, 2, 3, 4, 11, 12, 13, 14];
	const main_indexes = [5, 6, 7, 8, 15, 16, 17, 18];
	const medium_indexes = [9, 10];
	const classes = useStyles();

	return (
		<Grid container>
			{props.publications &&
				props.publications
					// .filter((pub) => pub.type === 'live')
					.map((publication, index) => {
						if (props.filter) return <MainPublication publication={publication} />;

						if (index === big) {
							return (
								<Grid container>
									<BigPublication publication={publication} />
									<Divider className={classes.divider} />
								</Grid>
							);
						}

						if (small_indexes.includes(index))
							return <SmallPublication publication={publication} />;

						if (main_indexes.includes(index))
							return <MainPublication publication={publication} />;

						if (medium_indexes.includes(index)) {
							return <MediumPublication publication={publication} />;
						}
					})}
		</Grid>
	);
};

PublicationsGrid.displayName = 'PublicationsGrid';

export default PublicationsGrid;
