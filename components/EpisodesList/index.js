import Carousel from "@/components/Card/Carousel";

// /components/EpisodesList.js
export default function EpisodesList({ episodes }) {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">最新のエピソード</h3>
      <Carousel>
        {episodes.map((episode, index) => (
          <div className="bg-white rounded-lg shadow-md p-6 mb-4" key={index}>
            <h2 className="text-xl font-medium text-gray-900 mb-2">{episode.title}</h2>
            <p className="text-gray-700 mb-4">{episode.content}</p>
            {/* 音声を再生するリンクを追加します */}
            <audio controls className="mt-4">
              <source src={episode.enclosure.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
