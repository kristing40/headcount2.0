


export default class DistrictRepository {
  constructor (data) {

    this.data = this.parseData(data)
  }

  parseData(data){
    
    return data.reduce((obj, state, i, arr) => {

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

    if(location === undefined){
      return undefined
    } else {

      const locationUpper = location.toUpperCase()

      if(data[locationUpper]){
        return data[locationUpper]
      }
    }
  }
}
