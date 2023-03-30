// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');

export default function handler(req, res) {
  fs.readdir('blogdata',  (err, data) =>{
    console.log(data)
        
    res.status(200).json( data )

    console.log(typeof data)
  })
  
}
