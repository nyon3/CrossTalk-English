import styles from "./styles.module.css";

const daysOfWeek = ["水", "木", "金", "土"];
const lessonTimes = [
  "12:30-13:20",
  "14:00-15:00",
  "15:00-15:50",
  "15:30-16:20",
  "16:30-17:20",
  "18:00-18:50",
  "18:30-19:20",
];

const WeeklyCalendar = ({ lessonData }) => {
  return (
    <>
      <h2>レッスンスケジュール</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>曜日/時間</th>
            {lessonTimes.map((time, index) => (
              <th key={index} className={styles.th}>
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.map((day, index) => (
            <tr key={index}>
              <td className={styles.td}>{day}</td>
              {lessonTimes.map((time, i) => (
                <td key={i} className={styles.td}>
                  {lessonData[day][time] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WeeklyCalendar;
