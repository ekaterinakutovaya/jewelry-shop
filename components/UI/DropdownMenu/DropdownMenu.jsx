import React from "react";
import styles from "./DropdownMenu.module.scss";

const DropdownMenu = ({ items, color, backgroundColor, borderColor }) => {

  return (
    <div
      className={styles.menu}
      style={{ borderTop: `1px solid ${borderColor}` }}
    >
      <div
        className={styles.menuContent}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <ul>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: `${color}`,
                  fill: `${color}`,
                  stroke: `${color}`
                }}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
