import kinderData from '../data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor (kinderData) {
    this.data = kinderData.reduce((obj, state, i, arr) => {

        if(!obj[state.Location]){
          obj[state.Location] = [state]
        } else {
          obj[state.Location].push(state)
        }
      return obj;
    },{})
  }
}
