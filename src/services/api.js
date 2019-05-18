import axios from 'axios'
const api = axios.create({
  baseURL:
    'https://language.googleapis.com/v1/documents:analyzeEntities?key=AIzaSyALVbFqtiMKojrI0vAFfapVFj4UBH_VWN8'
})

// POST =API_KEY
// https://www.googleapis.com/books/v1
// key = 'AIzaSyALVbFqtiMKojrI0vAFfapVFj4UBH_VWN8'

export default api
