import React, {useState, useEffect} from 'react';
import styles from './ScrollUpButton.module.scss';


const ScrollUpButton = () => {
    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

    return (
      <button
            className={styles.scrollUp}
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      >
        <svg className={styles.icon}>
          <use xlinkHref="#scrollUp" />
        </svg>
        <svg display="none">
          <symbol
            id="scrollUp"
            viewBox="0 0 455 455"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{enableBackground: "new 0 0 455 455"}}
          >
            <g>
              <path
                d="M227.5,0C101.855,0,0,101.855,0,227.5S101.855,455,227.5,455S455,353.145,455,227.5S353.145,0,227.5,0z M334.411,276.772
	L227.5,170.209L120.589,276.772l-21.178-21.248L227.5,127.852l128.089,127.673L334.411,276.772z"
              />
            </g>
          </symbol>
        </svg>
      </button>
    );
};

export default ScrollUpButton;