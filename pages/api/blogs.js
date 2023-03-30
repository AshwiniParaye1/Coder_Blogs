// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');

export default function handler(req, res) {
  fs.readFile('blogdata/how-to-learn-next.json', 'utf-8', (err, data) =>{
    // console.log(data)
        
    res.status(200).json( JSON.parse(data) )

    console.log(typeof data)
  })
  
}
