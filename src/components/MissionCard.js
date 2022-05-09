import React from 'react';
import PropTypes from 'prop-types';
import './Missions.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missao">
        <p data-testid="mission-name">{ name }</p>
        <hr />
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: 'Missão',
  year: 'Ano da Missão',
  country: 'Nacionalidade da missão',
  destination: 'Destino da Missão',
};

export default MissionCard;
