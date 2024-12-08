import React from 'react';
import classNames from 'classnames';
import styles from './GemButton.module.scss';
import { TbDiamond } from "react-icons/tb";

const GemButton = ({ gem, gemLabel, activeGem, onChange, color }) => {
  const btnClass = classNames({
    [styles.radioLabel]: true,
    [styles.active]: activeGem === gem,
  });
  
  return (
      <label className={btnClass}>
        <TbDiamond style={{ color: color }} /> {/* Set icon color dynamically */}
        <input
            type="radio"
            value={gem}
            checked={activeGem === gem}
            onChange={() => onChange(gem)}
        />
        {gemLabel}
      </label>
  );
};

export default GemButton;
