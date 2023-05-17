import styles from './styles.module.css';

const Carousel = ({ children }) => (
  <div className={styles.carousel}>
    {children}
  </div>
);

export default Carousel;