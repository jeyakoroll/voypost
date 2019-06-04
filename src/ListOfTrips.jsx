import React from 'react'
import InputSearch from './components/InputSearch' 
import Trip from './components/Trip' 

import { filterByInputValue } from './utils/selectors'

class ListOfTrips extends React.PureComponent {
  state = { value: '' }

  setInputValue = value => this.setState({ value })

  render() {
    const { trips } = this.props
    const { value } = this.state
    const filteredTrips = trips.filter((trip, key) => filterByInputValue(trip, key, value));
    
    return (
      <div className="App">
        <InputSearch setInputValue = { this.setInputValue } />
        <section className="trip-layout">
          {filteredTrips.map( (trip, key) => <Trip key = { key } trip = { trip } /> )}
        </section>
      </div>
    )
  }
}

export default ListOfTrips;