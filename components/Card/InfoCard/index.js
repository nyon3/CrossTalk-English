// Import Tailwind CSS classes
import "tailwindcss/tailwind.css";
// TODO - fix icon design
const InfoCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      {data.map((card) => (
        <div className="bg-white rounded-lg shadow-md p-4 w-72" key={card.title}>
          <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700 mt-4">{card.title}</h3>
          <p className="text-gray-500 mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
