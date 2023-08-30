
// TODO: Use tailwind css to index page, and remove this file.
import styles from "./styles.module.css";

const SectionHeader = ({ subHeader, mainHeader }) => (
  <div className={styles.section_heading}>
    <span>{subHeader}</span>
    <p>{mainHeader}</p>
  </div>
);

export default SectionHeader;
