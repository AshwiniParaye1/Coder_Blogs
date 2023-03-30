import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const slug = () => {

    const router = useRouter();
    const { slug } = router.query;


  return ( <div>
    <main className={styles.mainBlogpost}>

      <h1>Title of the page {slug}</h1>
      <hr />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum cupiditate nam esse corporis doloremque similique molestias, deleniti, repudiandae magni repellendus, sunt ad beatae!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate. Doloribus beatae debitis fugit maiores laborum esse odit fuga, quam veniam aliquam natus saepe similique iste consequatur itaque id, libero error voluptatibus nulla maxime, dolorum quo eveniet officiis. Nam velit fugit iure tempore tempora rem.
      </div>

    </main>
  </div>
  )
}

export default slug