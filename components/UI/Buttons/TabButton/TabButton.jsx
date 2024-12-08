import React from 'react';
import classNames from 'classnames';
import styles from './TabButton.module.scss';

const TabButton = ({ activeTab, children, onClick }) => {
  const btnClass = classNames({
    [styles.tabButton]: true,
    [styles.active]: activeTab
  });
  
  return (
      <button className={btnClass} onClick={onClick}>
        {children}
      </button>
  );
};

export default TabButton;
