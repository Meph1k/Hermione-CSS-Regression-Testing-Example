import React from 'react';
import PropTypes from 'prop-types';
import HealthMeter from '../HealthMeter/HealthMeter';
import './styles.scss';
const vaultBoyImg = require('../../assets/img/vault-boy-overview.png');

const VaultBoyOverview = ({
  headHealth,
  leftArmHealth,
  rightArmHealth,
  torsoHealth,
  leftLegHealth,
  rightLegHealth,
  name,
  level
}) => (
  <section className="vault-boy-section">
    <div className="vault-boy-image-container">
      <img alt="Vault boy" src={vaultBoyImg} className="vault-boy-image" />
      <HealthMeter
        className="head-health-meter"
        currentHealthMeasure={headHealth}
      />
      <HealthMeter
        className="left-arm-health-meter"
        currentHealthMeasure={leftArmHealth}
      />
      <HealthMeter
        className="right-arm-health-meter"
        currentHealthMeasure={rightArmHealth}
      />
      <HealthMeter
        className="torso-health-meter"
        currentHealthMeasure={torsoHealth}
      />
      <HealthMeter
        className="left-leg-health-meter"
        currentHealthMeasure={leftLegHealth}
      />
      <HealthMeter
        className="right-leg-health-meter"
        currentHealthMeasure={rightLegHealth}
      />
    </div>
    <div className="player-info">
      <span>{name}</span>
      <span><hr /></span>
      <span>level {level}</span>
    </div>
  </section>
)

export default VaultBoyOverview;

VaultBoyOverview.defaultProps = {
  headHealth: 100,
  leftArmHealth: 80,
  rightArmHealth: 65,
  torsoHealth: 90,
  leftLegHealth: 85,
  rightLegHealth: 100,
  name: 'Meph1k',
  level: 4
}

VaultBoyOverview.propTypes = {
  headHealth: PropTypes.number,
  leftArmHealth: PropTypes.number,
  rightArmHealth: PropTypes.number,
  torsoHealth: PropTypes.number,
  leftLegHealh: PropTypes.number,
  rightLegHealth: PropTypes.number,
  name: PropTypes.string,
  level: PropTypes.number,
}
