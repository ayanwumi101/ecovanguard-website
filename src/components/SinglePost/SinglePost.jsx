import React, {useState, useEffect} from 'react'
import client from '../../client'
import {useParams, Link} from 'react-router-dom'
import styles from './styles.module.css'
import BlockContent from '@sanity/block-content-to-react';
import {FaArrowLeft} from 'react-icons/fa'
const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [loading, setLoading] = useState(true);
  const {slug} = useParams();

  useEffect(() => {
    client.fetch(
        `*[slug.current == "${slug}"]{
            title,
            body,
            mainImage{
                asset -> {
                    _id,
                    url
                },
                alt
            },
            "authorName": author -> name,
        }`
    ).then((data) => setSinglePost(data[0]));
    setLoading(false)
  }, [slug])

  return (

    <>
        {loading ? <h2>Loading ....</h2> : 
        <div className={styles.single_post_container}>
            <div className={styles.single_image_container}>
                {singlePost.mainImage && singlePost.mainImage.asset &&(
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title} title={singlePost.title} />
                )}
            </div>

            <div className={styles.heading}>
                <h2>{singlePost.title}</h2>
                <p className="author">By: {singlePost.authorName}</p>
            </div>
            <BlockContent blocks={singlePost.body} projectId='vyd7qavh' dataset='production' className={styles.content}/>

            <Link to='/posts'><button className={styles.back_button}>
                <FaArrowLeft/>
                <span>Back</span>
            </button></Link>
        </div>}
    </>
  )
}

export default SinglePost