import React from "react";
import { urlFor } from "/lib/client";

import styles from "./BlockDevider.module.scss";

const BlockDevider = ({ randomDevider }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${urlFor(randomDevider.backgroundImage)}`
      }}
      onContextMenu={e => e.preventDefault()}
    ></div>
  );
};

export default BlockDevider;
