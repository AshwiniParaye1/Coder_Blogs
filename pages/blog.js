import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import * as fs from "fs";

const Blog = (props) => {
  // console.log('props ==== ', props)
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div className={styles.blogs} key={blogItem.title}>
              <div className={styles.blogItem}>
                {/* <Link href={'/blogpost/learn-javascript'}> */}

                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h3 className={styles.h3tag}>{blogItem.title}</h3>
                </Link>
                <p>{blogItem.content.substr(0, 140)}...</p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
