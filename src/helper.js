export default class DistrictRepository {
  constructor (data) {
    this.data = this.parseData(data)
  }

  convertNA(value) {
    if(value.Data === "N/A") {

      value.Data = 0
      return value.Data
    } else {
      return Math.round(value.Data * 1000)/1000;
    }
  }

  parseData(data){

    return data.reduce((obj, value, i) => {

      let placeUpper = value.Location.toUpperCase()

      if(!obj[value.Location]){

        obj[placeUpper] = {location: value.Location, data: { [value.TimeFrame] : this.convertNA(value)} }

      } else {

        obj[placeUpper].data = Object.assign({}, obj[placeUpper].data, {[value.TimeFrame] : this.convertNA(value) } )
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

  findAllMatches(str) {
    let keys = Object.keys(this.data);
    let parseData = this.data;
    let matchArray = [];

    if(str === undefined) {
      return keys
    } else {
      let upperCaseStr = str.toUpperCase();

      // const newObj = keys.reduce((matchObj, key) => {
      //   if(key.includes(upperCaseStr)){
      //     matchObj[key] = parseData[key];
      //   }
      //   console.log(matchObj.length);
      // },{})


      // keys.forEach((key) => {
      //   if(key.includes(upperCaseStr)){
      //     var matchObj = Object.assign({},parseData[key] )
      //   }
      //   console.log(matchObj);
      // })

      keys.forEach((key) => {
        if(key.includes(upperCaseStr)){
          matchArray.push(this.data[key]);
        }
      });
      return matchArray
  }
}

}//End of class
