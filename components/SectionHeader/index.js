/**
 * SectionHeader
 *
 * This is a reusable component that provides a header and subheader styled consistently across the application.
 *
 * @component
 * @prop {string} subHeader - The subheader text displayed above the main header text.
 * @prop {string} mainHeader - The main header text displayed below the subheader text.
 */

import styles from "./styles.module.css";

const SectionHeader = ({ subHeader, mainHeader }) => (
  <div className={styles.section_heading}>
    <span>{subHeader}</span>
    <p>{mainHeader}</p>
  </div>
);

export default SectionHeader;
