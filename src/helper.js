import kinderData from '../data/kindergartners_in_full_day_program.js';


export default class DistrictRepository {
  constructor (kinderData) {

    this.data = kinderData.reduce((obj, state, i, arr) => {

        if(!obj[state.Location]){
          // console.log(state.TimeFrame);
          obj[state.Location.toUpperCase()] = {location: state.Location, data: {[state.TimeFrame] : Math.ceil(state.Data * 1000)/1000 } }
        } else {
          const locationKey = obj[state.Location.toUpperCase()].data
          // console.log(locationKey);
          const dataObj = Object.assign({}, ...[locationKey])
          // console.log(dataObj);
          // obj[state.Location.toUpperCase()] = {location: state.Location, data: {[dataObj]} }
        }
      return obj;
    },{})
  }



  findByName(location){

    const data = this.data
    // console.log(data);

    if(location === undefined){
      return undefined
    } else {

      const locationUpper = location.toUpperCase()
      // console.log(data[locationUpper]);
      if(data[locationUpper]){
        return data[locationUpper]
      }
    }
  }
}
