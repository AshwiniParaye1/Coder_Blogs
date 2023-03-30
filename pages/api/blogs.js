// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getBlog?slug=how-to-learn-js
// http://localhost:3000/api/blogs

const fs = require('fs');

export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for ( let index = 0; index < data.length; index++  ) {
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile( ("blogdata/" + item), "utf-8" )
    allBlogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allBlogs)

  // fs.readdir('blogdata',  (err, data) =>{
  //   console.log(data)
        
  //   res.status(200).json( data )

  //   console.log(typeof data)
  // })
  
}
