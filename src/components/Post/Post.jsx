import SanityBlockContent from '@sanity/block-content-to-react'
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
// import image from '../../images/test.jpg'
import styles from './styles.module.css'
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client'




const Post = ({post}) => {
  // const smallText = post.body.substring(0,40);
  // console.log(smallText);
  console.log(post);
  // const preview = post.body.substr(0,40);
  return (
    
        <div className={styles.post_container}>
            <div className={styles.image_container}>
                <img src={post.mainImage.asset.url} alt={post.title} />
            </div>
            <div className={styles.post_content}>
              <h3>{post.title}</h3>
              <div className={styles.post_details}>
                  <p><em>Author:</em> <strong>{post.authorName}</strong></p>
                  <p>{post.title}.....</p>
                  <p><em>Posted on:</em> <strong>{new Date(post.publishedAt).toDateString()}</strong></p>
              </div>
              <Link to={`/blog/${post.slug.current}`}><button className={styles.read_more}>Read full article</button></Link>
            </div>
        </div>
    
  )
}

export default Post