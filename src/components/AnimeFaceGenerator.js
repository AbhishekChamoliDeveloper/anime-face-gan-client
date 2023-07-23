import React, { useState } from "react";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
import { FaRobot, FaQuestion } from "react-icons/fa";

import abhishekImage from "../assets/Abhishek-Chamoli-Profle-Green-Background.png";

const AnimeFaceGenerator = () => {
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = () => {
    setLoading(true);
    setImageData("");

    axios
      .get("https://nothing.abhishekchamoli.repl.co/api/generate-image")
      .then((response) => {
        setImageData(response.data.image);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Anime Face Generation GAN AI
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Generation */}
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 flex items-center justify-center">
            {imageData ? (
              <img
                src={`data:image/png;base64,${imageData}`}
                alt="Generated Anime"
                className="w-64 h-64 object-contain"
              />
            ) : (
              <div
                className={`w-24 h-24 text-gray-400 ${
                  loading ? "animate-spin" : ""
                }`}
              >
                {loading ? (
                  <AiOutlineLoading className="h-full w-full" />
                ) : null}
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaRobot className="text-4xl text-purple-600" />
              <p className="text-gray-700 text-lg font-semibold">
                Trained with 65,000+ images
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaQuestion className="text-4xl text-purple-600" />
              <p className="text-gray-700 text-lg font-semibold">
                Generate your own anime faces
              </p>
            </div>
            <p className="text-gray-700">
              A GAN-based AI app that generates non-existing anime faces.
              trained on 65,000+ anime face images with Python TensorFlow API
              and served with Flask. created from scratch by Abhishek Chamoli.
              constantly improving for better results.
            </p>

            {/* Developer Card Section */}
            <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
              <img
                src={abhishekImage}
                alt="Developer"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-800 font-bold text-lg">Developer:</p>
                <p className="text-gray-600">Abhishek Chamoli</p>
              </div>
            </div>
          </div>
        </div>

        {/* Generate Image Button */}
        <div className="flex justify-center mt-8">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded ${
              loading ? "opacity-50 cursor-wait" : ""
            }`}
            onClick={generateImage}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeFaceGenerator;
