import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './iconSlider.module.scss';

export default class IconSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			min: this.props.min,
			max: this.props.max,
			value: this.props.defaultValue
        };
	}

    onInputChange = (input)=> {
        this.setState({value: input});
    }

	render() {
		let {min, max, value} = this.state;

		return (
			<div>
				<div className={styles['iconslider-container']}>
					<input type="range" min={min} max={max} value={value} className={styles['slider']} id="myRange" onChange={(e)=>this.onInputChange(e.target.value)}/>
				</div>
			</div>
		);
	}
}

IconSlider.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	defaultValue: PropTypes.number
};

IconSlider.defaultProps = {
	min: 0,
	max: 100,
	defaultValue: 50
};
