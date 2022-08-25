import React, { useEffect, useState } from 'react'
import client from '../../client'
import Post from '../Post/Post';
import styles from './styles.module.css'
// import Fade from 'react-reveal/Fade'
import RelatedPost from '../RelatedPost/RelatedPost';



const Posts = () => {
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    client.fetch(
        `*[_type == 'post']{
            title,
            slug,
            body,
            publishedAt,
            mainImage{
                asset -> {
                    _id,
                    url
                },
                alt
            },
            "authorName": author -> name,
            "authorImage": author -> image,
        }`
    ).then((data) => setPost(data)).catch((console.error));
  }, [])
  console.log(post);
  const date = new Date().toDateString();
  return (
    <div className={styles.container}>
        <h2>Latest Posts</h2>
        <p>{date}</p>
        <div className={styles.overall_container}>
            <div className={styles.posts_container}>
                {/* <Fade left> */}
                  {post.map((post) => <Post post={post} key={post.slug.current} />)}
                {/* </Fade> */}
            </div>
            
            
            <div className={styles.related}>
                <div className={styles.heading}>
                  <h3>Related News</h3>
                  <div className={styles.line}></div>
                </div>
                {/* <Fade right> */}
                  {post.map((item) => <RelatedPost item={item} key={item.slug.current} />)}
                {/* </Fade> */}
            </div>
            
        </div>
    </div>
  )
}

export default Posts