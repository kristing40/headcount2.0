


export default class DistrictRepository {
  constructor (data) {

    this.data = this.parseData(data)
  }

  parseData(data){

    return data.reduce((obj, value, i) => {

      let placeUpper = value.Location.toUpperCase()

      if(!obj[value.Location]){

        obj[placeUpper] = {location: value.Location, data: { [value.TimeFrame] : Math.round(value.Data * 1000)/1000} }

      } else {

        obj[placeUpper].data = Object.assign({}, obj[placeUpper].data, {[value.TimeFrame] : Math.round(value.Data * 1000)/1000 } )

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
