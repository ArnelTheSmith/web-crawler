const { JSDOM } = require('jsdom')


export const normalizeURL = (url: string) => {
   const myURL = new URL (url)
   let fullPath = `${myURL.host}${myURL.pathname}`
   if (fullPath.length > 0 && fullPath.slice(-1) === '/'){
      fullPath = fullPath.slice(0, -1)
    }
   return fullPath
}

export const getURLsFromHTML = (htmlBody : any, baseURL: any) =>{
   const urls = []
   const dom  =  new JSDOM(htmlBody)
   const aElements =  dom.window.document.querySelectorAll('a')
   for ( const aElement of aElements){
      if ( aElement.href.slice(0,1) === "/" ){
         try{
            urls.push( new URL (aElement.href, baseURL).href )
         }
         catch(err: any)
         {
            console.log(`${err.message}: ${aElement.href}`)
         }
      }
      else
      {
         try{
            urls.push( new URL (aElement.href).href )
         }
         catch(err: any)
         {
            console.log(`${err.message}: ${aElement.href}`)
         }
      }
      
   }
   return urls

}



module.exports = {
   normalizeURL,
   getURLsFromHTML
 }