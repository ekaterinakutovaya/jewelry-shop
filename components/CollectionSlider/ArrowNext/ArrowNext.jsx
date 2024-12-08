import React from "react";
import styles from "./ArrowNext.module.scss";

const ArrowNext = ({ onClick }) => {
  return (
    <button className={styles.arrowNextWrapper} onClick={onClick}>
      <svg className={styles.arrowNext}>
        <use xlinkHref="#arrowNext" />
      </svg>
      <svg className="hidden" display="none">
        <symbol
          id="arrowNext"
          viewBox="0 0 195.055 195.055"
          style={{ enableBackground: "new 0 0 195.055 195.055" }}
        >
          <g>
            <polygon
              points="33.138,94.882 73.787,54.245 70.047,50.501 23.025,97.527 70.047,144.55 73.787,140.813 
			33.138,100.165 166.837,100.165 166.837,94.882 		"
            />
            <path
              d="M97.529,0C43.753,0,0.005,43.751,0.005,97.531c0,53.769,43.748,97.524,97.524,97.524
			s97.52-43.755,97.52-97.524C195.049,43.751,151.305,0,97.529,0z M97.529,190.441c-51.231,0-92.914-41.679-92.914-92.911
			c0-51.242,41.683-92.925,92.914-92.925c51.228,0,92.914,41.683,92.914,92.921C190.443,148.759,148.757,190.441,97.529,190.441z"
            />
          </g>
        </symbol>
      </svg>
    </button>
  );
};

export default ArrowNext;
