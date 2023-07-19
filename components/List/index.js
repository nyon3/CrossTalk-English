import Icon from "@/public/language.svg";
import styles from "./styles.module.css";

const List = ({ data }) => (
  <>
    {data.map((item, i) => {
      return (
        <div className={styles.flexWrapper} key={i}>
          <Icon />
          <div className={styles.para}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      );
    })}
  </>
);

export default List;
