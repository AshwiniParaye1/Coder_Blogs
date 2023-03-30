import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const Blog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("useEffect is running");
    fetch('http://localhost:3000/api/blogs')
    .then((res) => res.json())
    .then(data => {
      console.log('data ==== ', data)
      // console.log('data ==== ',data[0].content)
      setBlogs(data)
    })
  }, [])
  

  return (
    <div>
    <main className={styles.main}>
      {
        blogs.map( (blogItem) => {
          return <div className={styles.blogs} key={blogItem.title}>
          <div className={styles.blogItem}>

          {/* <Link href={'/blogpost/learn-javascript'}> */}

          <Link href={`/blogpost/${blogItem.slug}`}>
            <h3 className={styles.h3tag}>{blogItem.title}</h3></Link>
            <p>{blogItem.content.substr(0,140)}...</p>
          </div> 
          </div>
        } )
      }
      
    </main>
    </div>
  )
}

export default Blog