import styles from './styles.module.css';

// Loader from: https://uiverse.io/Donewenfu
function Loader() {
  return (
    <div className={`${styles.loader}`}>
      <div
        className={`${styles.justifyContentCenter} ${styles.jimuPrimaryLoading}`}
      />
    </div>
  );
}

export default Loader;
