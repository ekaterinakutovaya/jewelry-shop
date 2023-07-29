import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsInstagram } from "react-icons/bs";

import MySlider from "./MySlider/MySlider";
import styles from "./InstagramPosts.module.scss";

const InstagramPosts = ({ feed }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    feed.data && feed.data.filter(item => {
      if (item.media_type !== "VIDEO") {
        setData(prevState => [...prevState, item]);
      }
      
    })
    
    return () => {
      setData([]);
    }
  }, [feed])
  
  
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, []);
  
  return (
      <div
          className={styles.instagram}
          data-aos={"fade"}
          onContextMenu={e => e.preventDefault()}
      >
        <h2>Мы в Instagram</h2>
        
        <div className={styles.inner}>
          <MySlider>
            {data && data.map((item, i) => (
                <div key={item.id} className="d-flex justify-content-center">
                  <a
                      href={item.permalink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.instagramLink}
                  >
                    <div className={styles.imageWrapper}>
                      <div className={styles.overlay}><BsInstagram /></div>
                      <div className={styles.image}>
                        <img src={item.media_url} alt="instagram images" />
                      </div>
                    </div>
                  
                  </a>
                </div>
            ))}
          </MySlider>
        </div>
      </div>
  );
};

export default InstagramPosts;