import React from 'react';

import styles from "./Scetch.module.scss";

const Scetch = () => {
    return (
      <div
        className={styles.scetch}
        onContextMenu={e => e.preventDefault()}
      ></div>
    );
};

export default Scetch;