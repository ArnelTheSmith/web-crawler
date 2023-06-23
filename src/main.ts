import { normalizeURL, getURLsFromHTML } from "./crawl";
// const inputURL = 'https://blog.boot.dev'
//const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>'
//const blogURLs = getURLsFromHTML(inputBody,inputURL)
//console.log(blogURLs)

function main(){
   if (process.argv.length < 3){
     console.log('no website provided')
   }
   if (process.argv.length > 3){
     console.log('too many arguments provided')
   }
 
   const baseURL = process.argv[2]
   console.log( process.argv[0] )
   console.log(`starting crawl of: ${baseURL}...`)
 }
 main()