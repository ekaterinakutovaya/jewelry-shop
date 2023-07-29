import React from 'react';

import styles from "./PagePreloader.module.scss";
import { LogoIcon } from "components";

const PagePreloader = ({header}) => {

  return (
    <div className={styles.preloader}>
      <div>
        <span className={styles.loader}></span>
      </div>
    </div>
    
  );
};

export default PagePreloader;