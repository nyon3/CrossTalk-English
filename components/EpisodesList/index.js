import Carousel from "@/components/Card/Carousel";
import styles from "./styles.module.css";

// /components/EpisodesList.js
export default function EpisodesList({ episodes }) {
  return (
    <div className={styles.wrapper}>
      <h3>最新のエピソード</h3>
      <Carousel>
        {episodes.map((episode, index) => (
          <div className={styles.item} key={index}>
            <h2 style={{ fontSize: 18 }}>{episode.title}</h2>
            <p>{episode.content}</p>
            {/* 音声を再生するリンクを追加します */}
            <audio controls style={{ marginTop: 30 }}>
              <source src={episode.enclosure.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
