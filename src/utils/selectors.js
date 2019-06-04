import Trips from '../api'

// Func for getting trips
export const getTrips = async () => new Promise((resolve, reject) => {
  resolve(Trips)
})

// Formatted data
export const formattedData = trips => trips.reduce((generatedTrips, trip, key) => {
  // Func for creating data for filtering
  const createData = (fromName, toName, date, vehicle) => 
  ({ id: key, fromName, toName, date, vehicle });
  
  const dateOfTrip = new Date(trip.departAt).toLocaleString();
  // Create data
  const eachTrip = createData(trip.fromName, trip.toName, dateOfTrip, trip.vehicle );
  generatedTrips.push(eachTrip); 
  return generatedTrips;
}, []);

// And filter our trips
const createInputSearchData = (fromName, toName) => ([fromName, toName]);
export const filterByInputValue = (trip, idx, value) => {
  const searchableIdx = new Set(), lowerValue = value.toLowerCase();
  const searchCandidate = createInputSearchData(trip['fromName'], trip['toName']);
  searchCandidate.forEach((text = '') => text.toLowerCase().indexOf(lowerValue) > -1 ? searchableIdx.add(idx) : null);
  return searchableIdx.has(trip.id);
}

