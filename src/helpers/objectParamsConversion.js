export const objectToParam = (obj) => {
  let str = ''
  for (const key in obj) {
    if (str !== '') {
      str += '&'
    }
    str += key + '=' + encodeURIComponent(obj[key])
  }
  // console.log('params', str)
  return str
}

export function queryStringToObject(queryString) {
  const queryParams = new URLSearchParams(queryString)
  const queryObject = {}
  for (const [key, value] of queryParams) {
    queryObject[key] = value
  }
  return queryObject
}
