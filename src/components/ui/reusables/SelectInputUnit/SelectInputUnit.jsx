import React from 'react';

import SelectInputUnitView from './SelectInputUnit.view';

const SelectInputUnit = (props) => {
	const variant = props.variant ? props.variant : 'outlined';
	const error = props.error ? props.error : null;

	return (
		<SelectInputUnitView
			variant={variant}
			error={error}
			className={props.className}
			name={props.name}
			label={props.label}
			value={props.value || ''}
			optionsArray={props.optionsArray}
			optionLabelField={props.optionLabelField}
			valueField={props.valueField}
			placeholder={props.placeholder}
			native={props.native}
			//PopperComponent={props.PopperComponent}
			onChange={props.onChange}
		/>
	);
};

SelectInputUnit.displayName = 'SelectInputUnit';
SelectInputUnit.defaultProps = {};

export default React.memo(SelectInputUnit);
