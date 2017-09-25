import 'isomorphic-fetch'
export const API_HOST = 'http://localhost:8000/api'

export default function callApi(endpoint, _headers, body, method = 'get') {
  const fullUrl = (endpoint.indexOf(API_HOST) === -1) ? API_HOST + endpoint : endpoint
  let headers = _headers ? _headers : {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return fetch(fullUrl, {
    method,
    headers,
    body
  })
    .then(response => {
      if (!response.ok) {
        return Promise.reject('server error')
      }
      return response.json()
    })
    .then(res => Promise.resolve(res))
    .catch(function (error) {
      return Promise.reject(error)
    })
}
