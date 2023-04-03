import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  console.log("myblog props >>>>>", props)

  const router = useRouter();
  useEffect(() => {}, [router.isReady]);

  return (
    <div>
      <main className={styles.mainBlogpost}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  
  console.log("context.query ===== ", context.query)
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
  let myBlog = await data.json()

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

export default slug;
