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
            "imageUrl": author -> image.asset -> url,
            publishedAt,
        }`
    ).then((data) => setSinglePost(data[0]));
    setLoading(false)
  }, [slug])
console.log(singlePost);
  return (

    <>
    {loading ? <h2>Loading ....</h2> : 
        <div className={styles.single_post_container}>
            <div className={styles.single_image_container}>
                {singlePost.mainImage && singlePost.mainImage.asset &&(
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title} title={singlePost.title} />
                )}
            </div>

            <div className={styles.hero_text}>
                <h2>{singlePost.title}</h2>
            </div>


        <div className={styles.singlePost_details}>
            <div className={styles.heading}>
                <h2>{singlePost.title}</h2>
                <div className={styles.author_details}>
                    <img src={singlePost.imageUrl} alt={singlePost.authorName} className={styles.author_image} />
                    <p className={styles.author}>By: {singlePost.authorName}</p>
                </div>
                <p className={styles.posted}>Posted On: {new Date(singlePost.publishedAt).toDateString()}</p>
            </div>
            <BlockContent blocks={singlePost.body} projectId='vyd7qavh' dataset='production' className={styles.content}/>

            <Link to='/blog'><button className={styles.back_button}>
                <FaArrowLeft/>
                <span>Back</span>
            </button></Link>
        </div>
        </div>}
    </>
  )
}

export default SinglePost