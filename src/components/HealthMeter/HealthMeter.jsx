import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const HealthMeter = ({currentHealthMeasure, className}) => (
  <div className={classnames('current-health-meter-container', className)}>
    <div className="current-health-measure" style={{width: `${currentHealthMeasure - 3}%`}} />
  </div>
);

export default HealthMeter;

HealthMeter.defaultProps = {
  currentHealthMeasure: 100,
  className: ''
}

HealthMeter.propTypes = {
  currentHealthMeasure: PropTypes.number,
  className: PropTypes.string
}
