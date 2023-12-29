// BaseCard.js
import Image from "next/image";

const TeamComponent = ({ tutors }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      {/* Left Column - Image (hidden on smaller screens) */}
      <div className="hidden md:block md:flex-1 rounded-lg relative">
        <div
          style={{
            backgroundImage: `url('/images/eye-catch.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full absolute object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gray-500 opacity-50 rounded-lg"></div>
      </div>

      {/* Middle and Right Columns - Tutor Profiles */}
      {tutors.map((tutor) => (
        // TODO: Add margin top to the last tutor on mobile screen size.
        <div key={tutor.id} className="flex-1 flex flex-col px-4 pt-3">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{tutor.name}</h3>
          <p className="text-lg text-gray-500">{tutor.bio}</p>
          <ul className="text-sm md:text-md my-5 list-disc list-inside text-gray-600 ">
            <li>{tutor.likes}</li>
            <li>{tutor.dislikes}</li>
            <li>{tutor.hobbies}</li>
          </ul>
          <div className="md:mt-32 flex justify-center">
            <Image
              src={`/images/${tutor.image}`}
              width={500} // Adjusted for mobile
              height={500} // Adjusted for mobile
              alt={tutor.name}
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamComponent;
