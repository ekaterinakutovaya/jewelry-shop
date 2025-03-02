import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "./RelatedProducts.module.scss";
import Product from "../Product/Product";

import { Navigation, Pagination } from 'swiper/modules';
import {useContext, useEffect, useRef, useState} from "react";
import { BsChevronLeft, BsChevronRight} from "react-icons/bs";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {LanguageContext} from "../../context/LanguageContext";
import {useTranslations} from "../../hooks/useTranslations";

const RelatedProducts = ({relatedProducts}) => {
  const { locale } = useContext(LanguageContext);
  const t = useTranslations();
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('slideChange', () => {
        setIsPrevDisabled(swiperInstance.isBeginning);
        setIsNextDisabled(swiperInstance.isEnd);
      });
      
      setIsPrevDisabled(swiperInstance.isBeginning);
      setIsNextDisabled(swiperInstance.isEnd);
    }
  }, [swiperInstance]);
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  }
  
  
  return (
      <div className={`${styles.wrapper}`}>
        <h3 className={styles.title}>{t.view_other_items}</h3>
        
        <div className={styles.swiperContainer}>
          <button ref={prevRef} className="absolute top-[35%] left-[-45px] md:left-[-50px] z-[3000]">
            <BsChevronLeft className={`w-[40px] h-[40px] transition-all duration-500 ${
                isPrevDisabled ? "fill-gray-500 opacity-50" : "fill-[#212529] hover:fill-gray-400"
            }`}/>
          </button>
          
          <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              modules={[Navigation]}
              className=""
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={setSwiperInstance}
              pagination={pagination}
          >
            {relatedProducts.map((relatedProduct, index) => (
                <SwiperSlide key={index}><Product piece={relatedProduct} key={relatedProduct._id}/></SwiperSlide>
            ))}
          </Swiper>
          
          <button ref={nextRef} className="absolute top-[35%] right-[-45px] sm:right-[-50px] z-[3000]">
            <BsChevronRight  className={`w-[40px] h-[40px] transition-all duration-500 ${
                isNextDisabled ? "fill-gray-500 opacity-50" : "fill-[#212529] hover:fill-gray-600"
            }`}/>
          </button>
        </div>
      </div>
  );
};

export default RelatedProducts;