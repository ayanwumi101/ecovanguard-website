import React, {useState} from 'react'
import styles from './styles.module.css'
import image1 from '../../images/boy.png'
import image2 from '../../images/girl.png'
import image3 from '../../images/me.jpg'
import image4 from '../../images/house.jpg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import image from '../../images/project_image.svg'
import Footer from '../Footer/Footer'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


const Projects = () => {

    const [images, setImages] = useState([image1, image2, image3, image4]);
    const cards = [1, 2, 3, 4];
    
    const [prevIndex, setPrevIndex] = useState(0)
    const [index, setIndex] = useState(1)
    const [nextIndex, setNextIndex] = useState(2)


  const prevImage = () => {
      setImages(prev => {
        const last = prev[prev.length - 1];
        const others = prev.slice(0, prev.length - 1);
        return[last, ...others
        
        ]
      })
  }


  const nextImage = () => {
      setIndex((index + 1) % images.length);
      setPrevIndex((prevIndex + 1) % images.length);
      setNextIndex((nextIndex + 1) % images.length);
  }

  
  return (
    <div className={styles.projects_container}>
        <div className={styles.heading}>
            <h2>Eco-Projects</h2>
        </div>
        
        <main>
            <section className={styles.visitation}>
                  <h4>Next visitation</h4>

                  <div className={styles.action_btns}>
                      <button onClick={prevImage} className={styles.prev_btn}><FaChevronLeft /></button>
                      <button onClick={nextImage} className={styles.next_btn}><FaChevronRight /></button>
                  </div>
                  
                  <div className={styles.carousel_container}>
                    <Fade left>
                      <div className={styles.prev_image}>
                          <img src={images[prevIndex]} alt="Ecovanguard project image" className={styles.carousel_image} />
                      </div>
                    </Fade>
                    <Zoom>
                      <div className={styles.active_image}>
                          <img src={images[index]} alt="Ecovanguard project image" className={styles.carousel_image} />
                      </div>
                    </Zoom>
                    <Fade right>
                      <div className={styles.next_image}>
                          <img src={images[nextIndex]} alt="Ecovanguard project image" className={styles.carousel_image} />
                      </div>
                    </Fade>
                  </div>
                  
                  <div className={styles.caption}>
                      <h4>The Bodija Market</h4>
                  </div>

                  <div className={styles.caption_details}>
                      <div className="description">
                          <p>Waste Management Awareness Campaign</p>
                          <p>24th May, 2022</p>
                      </div>

                      <div className={styles.campaign}>
                          <button>Join This Campaign</button>
                      </div>
                  </div>
            </section>
            
              
            <section className={styles.cards_container}>
                  <h4>Ongoing Projects</h4>
                  <div className={styles.cards}>
                      {cards.map((item) => {
                          return (
                              <div className={styles.card}>
                                  <img src={image3} alt="Ongoing ecovanguard project" className={styles.card_img} />
                                  <div className={styles.card_text}>
                                      <p><strong>Project :</strong> Planting of 200 palm trees</p>
                                      <p><strong>Beneficiary :</strong> University of Ibadan</p>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
            </section>

            <section className={styles.completed_projects}>
                  <h4>Executed Projects</h4>
                  <div className={styles.completed}>
                      
                      <div className={styles.project_image}>
                          <img src={image} className={styles.project_img} alt="Completed Project image" />
                      </div>

                      <div className={styles.project_description}>
                          <p>Ecovanguard in a bid to create a greener earth by ensuring proper waste management and educating the future generations.</p>
                          <p>We have successfully completed a total of 19 projects to aid proper waste management in our communities and the impact of these projects are being felt in the society.</p>
                          <button>All Projects</button>
                      </div>

                  </div>
            </section>
            
        </main>
        <Footer />
    </div>
  )
}

export default Projects