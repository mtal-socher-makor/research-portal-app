import React from 'react';
import { Grid, Typography, TextField, Chip } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useSelector } from 'react-redux';
import { StyledAutoComplete } from '../../../../styles/MainStyles';
import useStyles from './TagsAutoComplete.style';

const filter = createFilterOptions();

const TagsAutoCompleteView = (props) => {
	const classes = useStyles();
	const tagsArr = useSelector((state) => state.utils.utils.tag);
	const tagsArrNames = tagsArr?.map((tag) => tag.name);

	return (
		<>
			{tagsArr && (
				<Grid container className={props.className}>
					<Grid item xs={12}>
						<Typography>{props.label}</Typography>
					</Grid>
					<Grid item xs={12}>
						<StyledAutoComplete
							className={classes.arrowIcon}
							id="tags"
							name="tags"
							multiple
							filterSelectedOptions
							filterOptions={(options, params) => {
								const filtered = filter(options, params);

								// Suggest the creation of a new value
								if (params.inputValue !== '' && !tagsArrNames.includes(params.inputValue)) {
									filtered.push({
										inputValue: params.inputValue,
										title: `Add "${params.inputValue}"`,
									});
								}

								return filtered;
							}}
							renderOption={(option) => option.name || option.title}
							selectOnFocus
							clearOnBlur
							handleHomeEndKeys
							options={tagsArr}
							renderTags={() => <></>}
							fullWidth
							freeSolo
							value={props.formObject || ''}
							onChange={(e, values) => props.handler(e, values)}
							{...(props.error && { error: true, helpertext: props.error })}
							getOptionLabel={(option) => {
								// Value selected with enter, right from the input
								if (typeof option === 'string') {
									return option;
								}

								// Add "xxx" option created dynamically
								if (option.inputValue) {
									return option.inputValue;
								}

								// Regular option
								return option.name;
							}}
							getOptionSelected={(option, value) =>
								option.name === value.name || option.name === value
							}
							renderInput={(params) => {
								return (
									<TextField
										{...params}
										autoComplete="off"
										variant="outlined"
										width="100%"
										placeholder="# Tags"
										{...(props.error && { error: true, helpertext: props.error })}
									/>
								);
							}}
						/>
						{props.formObject.length ? (
							// {formObject.members[memberIndex].categories && formObject.members[memberIndex].categories.length ? (
							<Grid item xs={12}>
								<Grid container className={classes.chipContainer}>
									{props.formObject.map((el, index) => (
										<Grid item key={index} className={classes.chipItem}>
											<Chip
												variant={props.chipVariant}
												label={`#${el.name}`}
												deleteIcon={<ClearIcon />}
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
			)}
		</>
	);
};

TagsAutoCompleteView.displayName = 'TagsAutoCompleteView';
TagsAutoCompleteView.defaultProps = {};

export default React.memo(TagsAutoCompleteView);
