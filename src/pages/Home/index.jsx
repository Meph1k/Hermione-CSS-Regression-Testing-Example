import React from 'react';
import VaultBoyOverview from '../../components/VaultBoyOverview/VaultBoyOverview';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <VaultBoyOverview />
      </div>
    )
  }
}

export default Home;
