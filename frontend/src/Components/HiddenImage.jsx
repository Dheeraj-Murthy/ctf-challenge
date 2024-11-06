import image from "../assets/challenge_image.png"

const HiddenImage = () => {
  return (
    <div className="mt-6">
      {/* This image should be your encoded image */}
      <img src={image} alt="Clue Image" className="hidden" />
      <p className="mt-4 text-lg text-gray-300">
        Check the source code to uncover the hidden clue...
      </p>
    </div>
  );
};

export default HiddenImage;
