import * as React from 'react';
import styles from './StatusCardBlue.module.css';

export interface IStatusCard {
  title: string;
  total: string;
  remaining: string;
}

const StatusCardBlue: React.FC<IStatusCard> = ({title, total, remaining }) => {
  return (
    <div className={styles.bluebox}>
      <div className={styles.bluecircle}></div>
      <p style= {{paddingLeft: 7}} className={styles.bluetitle}>{title}</p>
      <p style= {{paddingLeft: 7}} className={styles.total}>{total}</p>
      <p style= {{paddingLeft: 7}} className={styles.remaining}>{remaining}</p>
    </div>
  );
};

export default StatusCardBlue;