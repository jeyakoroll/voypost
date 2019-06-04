import React, { Fragment, PureComponent } from 'react';
import ListOfTrips from './ListOfTrips';

import './App.css';
import { getTrips, formattedData } from './utils/selectors'

class App extends PureComponent {
  state = { trips: null }

  componentDidMount() {
    getTrips().then(trips => {
      const tripsWithId = formattedData(trips);
      this.setState({ trips: tripsWithId })
    })
  }

  render() {
    const { trips } = this.state

    return <Fragment>
      {trips !== null && <ListOfTrips trips = { trips } />}
    </Fragment>
  }
}

export default App;
