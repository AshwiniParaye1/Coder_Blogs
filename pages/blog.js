import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'

const Blog = () => {

  useEffect(() => {
    console.log("useEffect is running");
    fetch('http://localhost:3000/api/blogs')
    .then((res) => res.json())
    .then(data => {
      console.log('data ==== ', data)
      // console.log('data ==== ',data[0].content)
    })
  })
  

  return (
    <div>
    <main className={styles.main}>

        {/* <h2 className={styles.h2tag}>Latest Blogs</h2> */}
        <div className={styles.blogs}>
          <div className={styles.blogItem}>
          <Link href={'/blogpost/learn-javascript'}>
            <h3 className={styles.h3tag}>How to learn JavaScript in 2022?</h3></Link>
            <p>JavaScript is the language used to design logic for the web Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi tempore alias placeat esse, facilis, tempora ipsa non nostrum iste possimus libero sint fuga quis nesciunt. Laboriosam, quia. Deleniti veniam sunt eum reiciendis exercitationem obcaecati natus id ratione! Iure dolorum ipsa aperiam. Necessitatibus nam labore sit.</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam quis at, ut officia incidunt aliquam numquam vel earum nobis?</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nihil?</p>
          </div>

          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga praesentium facere incidunt autem cumque at explicabo magnam magni, ipsam neque.</p>
          </div>
      </div>
    </main>
    </div>
  )
}

export default Blog