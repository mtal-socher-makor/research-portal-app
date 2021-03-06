import React from 'react';
import { Grid, Typography, TextField, Chip } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector } from 'react-redux';
import { StyledAutoComplete } from '../../../../styles/MainStyles';
import useStyles from './CategoriesAutoComplete.style';

const CategoriesAutoCompleteView = (props) => {
	const classes = useStyles();

	const categoriesArr = useSelector((state) => state.utils.utils.category);
	const userContent = JSON.parse(localStorage.getItem('userContent'));

	const categories =
		props.mode === 'edit' && (userContent?.type === 'client' || userContent?.type === 'prospect')
			? userContent.company_categories
			: categoriesArr;

	return (
		<>
			{categories?.length ? (
				<Grid container className={props.className}>
					{props.label && (
						<Grid item xs={12}>
							<Typography>{props.label}</Typography>
						</Grid>
					)}
					<Grid item xs={12}>
						<StyledAutoComplete
							className={classes.arrowIcon}
							id="categories"
							name="categories"
							multiple={props.notMultiple ? false : true}
							filterSelectedOptions
							options={categories}
							renderTags={() => <></>}
							fullWidth
							value={
								props.formObject.categories
									? props.formObject.categories
									: props.search
									? props.formObject[0]
									: props.formObject || ''
							}
							//{...(props.error && { error: true, helperText: props.error })}
							getOptionLabel={(option) => option.name || ''}
							getOptionSelected={(option, value) => option.name === value.name}
							renderInput={(params) => {
								return (
									<TextField
										{...params}
										autoComplete="off"
										variant="outlined"
										width="100%"
										placeholder="Categories*"
										{...(props.error && { error: true, helperText: props.error })}
									/>
								);
							}}
							onChange={(e, values) => props.handler(values)}
						/>
						{props.adjustedFormObject.length && !props.noChips ? (
							<Grid item xs={12}>
								<Grid container className={classes.chipContainer}>
									{props.adjustedFormObject.map((el, index) => (
										<Grid item key={index} className={classes.chipItem}>
											<Chip
												variant={props.chipVariant}
												label={el.name}
												deleteIcon={<ClearIcon style={{ height: '15px' }} />}
												className={classes.chip}
												onDelete={() => props.deleteItem(index)}
											/>
										</Grid>
									))}
								</Grid>
							</Grid>
						) : null}
					</Grid>
				</Grid>
			) : null}
		</>
	);
};

CategoriesAutoCompleteView.displayName = 'CategoriesAutoCompleteView';
CategoriesAutoCompleteView.defaultProps = {};

export default React.memo(CategoriesAutoCompleteView);
