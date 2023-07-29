import Slider from "react-slick";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import styles from "./MySlider.module.scss";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <BsChevronCompactLeft
      className={styles.prev}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <BsChevronCompactRight
      className={styles.next}
      onClick={onClick}
    />
  );
}


const MySlider = ({ children }) => {

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    focusOnSelect: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    easing: "linear",
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: false
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          fade: true,
          dots: false
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          fade: true,
          dots: false
        }
      }
    ]
  };

  return (
    <Slider {...settings}>{children}</Slider>

  );
};

export default MySlider;
