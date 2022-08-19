import SanityBlockContent from '@sanity/block-content-to-react'
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
// import image from '../../images/test.jpg'
import styles from './styles.module.css'
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client'




const Post = ({post}) => {
  console.log(post);
  // const preview = post.body.substr(0,40);
  return (
    
        <div className={styles.post_container}>
            <div className={styles.image_container}>
                <img src={post.mainImage.asset.url} alt={post.title} />
            </div>
            <div className={styles.post_content}>
              <h4>{post.title}</h4>
              <Link to={`/posts/${post.slug.current}`}><button className={styles.read_more}>Read full article</button></Link>
            </div>
        </div>
    
  )
}

export default Post