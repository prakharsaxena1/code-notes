import styles from './styles.module.css';

// Loader from: https://uiverse.io/Donewenfu
const Loader = () => {
  return (
    <div className={`${styles.loader}`}>
      <div className={`${styles.justifyContentCenter} ${styles.jimuPrimaryLoading}`}></div>
    </div>
  );
};

export default Loader