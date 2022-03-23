import React from 'react';

import NumberFormatCustomView from './NumberFormatCustom.view';
import PropTypes from 'prop-types';

const NumberFormatCustom = (props) => {
	return (
		<NumberFormatCustomView
			inputRef={props.inputRef}
			decimalNo={props.decimalNo}
			minValue={props.minValue}
			onChange={props.onChange}
			{...props.other}
		/>
	);
};

NumberFormatCustom.displayName = 'NumberFormatCustom';
NumberFormatCustom.defaultProps = {};
NumberFormatCustom.propTypes = {
	inputRef: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	decimalNo: PropTypes.number.isRequired,
	minValue: PropTypes.number.isRequired,
};

export default React.memo(NumberFormatCustom);
