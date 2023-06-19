export const normalizeURL = (url: string) => {
   const myURL = new URL (url)
   let fullPath = `${myURL.host}${myURL.pathname}`
   if (fullPath.length > 0 && fullPath.slice(-1) === '/'){
      fullPath = fullPath.slice(0, -1)
    }
   return fullPath
}

module.exports = {
   normalizeURL
 }