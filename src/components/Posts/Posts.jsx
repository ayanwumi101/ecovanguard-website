import React, { useEffect, useState } from 'react'
import client from '../../client'
import Post from '../Post/Post';
import styles from './styles.module.css'
import RelatedPost from '../RelatedPost/RelatedPost';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'react-router-dom';
import {MdMyLocation, MdCloud, MdOutlineCloud} from 'react-icons/md'
import axios from 'axios';



const Posts = () => {
  const [post, setPost] = useState([]);
  const [long, setLong] = useState('')
  const [lat, setLat] = useState('');
  const [weatherData, setWeatherData] = useState({})

  const getLocation = () => {
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          }, () => { setLat('unable to get your location')});
      }else{
        alert('sorry not granted')
      }
  }

const integer1 = Number(lat).toFixed(2);
const integer2 = Number(long).toFixed(2);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${integer1}&lon=${integer2}&appid=aa13bf4cbd2119a5691c63c39974705e`;

  const getWeather = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setWeatherData(data);
    } catch (error) {
      console.log(error.response);
    }
  }

  
  useEffect(() => {
    getLocation();
    getWeather();
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
  console.log(weatherData);
  const {main, coord, weather, wind, sys, timezone} = weatherData;
  return (
    <div className={styles.container}>

        <h2>Latest Posts</h2>
        <p>{date}</p>

        <div className={styles.sub_container}>
            <div>
              {post.map((post) => {
                return(
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
            })}
            </div>

          <div>
            {main && <div className={styles.weather}>
                  <div className={styles.heading}>
                    <h4>Your local weather</h4>
                    <span><MdMyLocation/></span>
                  </div>
                  <div className={styles.line}></div>

                  <div className="content">
                    <div className={styles.column}>
                      <div>
                        <div><MdOutlineCloud className={styles.cloud} /></div>
                        <p id={styles.weather_text}>{weather[0].main && weather[0].main}</p>
                      </div>

                      <div className={styles.temp}>
                        {main.temp && parseFloat(main.temp).toFixed(1)}K
                      </div>
                    </div>

                    <div>
                      Your Coordinates
                      <p>Latitude: {coord.lat}</p>
                      <p>Latitude: {coord.lon}</p>
                      <p>Timezone: {timezone && timezone}</p>
                      <p><strong>Country: {sys.country}</strong></p>
                    </div>

                    <div>
                      Weather Details
                      <p>Relative Humidity: {main.humidity}</p>
                      <p>Pressure: {main.pressure}</p>
                      <p>Maximum Temp: {main.temp_max}</p>
                      <p>Minimum Temp: {main.temp_min}</p>
                      <p>Weather: {weather[0].main}</p>
                      <p>Wind Speed: {wind.speed} Degree: {wind.deg}</p>
                    </div>
                  </div>
            </div>}
          </div>
        </div>

    </div>
  )
}

export default Posts