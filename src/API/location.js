import axios from "axios"

// Get location
export function getLocation() {
  return axios.get('/db/data.json').then((response) => response.data)
}

export function getLocationById(id){
  return axios.get('/db/data.json').then((response) => {
    let data = response.data
    let object = data.find(el => el.id === id)
    return object
  })

}