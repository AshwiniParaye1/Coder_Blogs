import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  // console.log('props ==== ', props)
  const [blogs, setBlogs] = useState(props.allBlogs);

  const [count, setCount] = useState(2);

  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b style={{ textAlign: "center" }}>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogItem) => {
            return (
              <div className={styles.blogs} key={blogItem.title}>
                <div className={styles.blogItem}>
                  {/* <Link href={'/blogpost/learn-javascript'}> */}

                  <Link href={`/blogpost/${blogItem.slug}`}>
                    <h3 className={styles.h3tag}>{blogItem.title}</h3>
                  </Link>
                  <p>{blogItem.metadesc.substr(0, 140)}...</p>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
