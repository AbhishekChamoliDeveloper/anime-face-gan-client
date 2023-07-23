// AnimeFaceGenerator.js
import React, { useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AnimeFaceGenerator = () => {
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    setImageData("");

    try {
      const response = await axios.get(
        "http://nothing.abhishekchamoli.repl.co/api/generate-image"
      );
      console.log(response);
      setImageData(response.data.image);
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Anime Face Generator AI
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Trained with 65,000+ images
        </p>
        <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 flex items-center justify-center mb-6">
          {imageData ? (
            <img
              src={`data:image/png;base64,${imageData}`}
              alt="Generated Anime"
              className="w-40 h-40 object-contain"
            />
          ) : (
            <div
              className={`w-24 h-24 text-gray-400 ${
                loading ? "animate-spin" : ""
              }`}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="h-full w-full" />
              ) : null}
            </div>
          )}
        </div>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full ${
            loading ? "opacity-50 cursor-wait" : ""
          }`}
          onClick={generateImage}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>
    </div>
  );
};

export default AnimeFaceGenerator;
