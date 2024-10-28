"use client";
import { useState, useEffect } from "react";
import SevaForm from "./SevaForm"; // Import the SevaForm component directly

interface Seva {
  id: number;
  name: string;
  description: string;
  base_price: number;
  name_kannada?: string; // Kannada name
  description_kannada?: string; // Kannada description
}

export default function SevasList(): JSX.Element {
  const [sevas, setSevas] = useState<Seva[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showKannada, setShowKannada] = useState<boolean>(false); // State to track language
  const [selectedSeva, setSelectedSeva] = useState<Seva | null>(null); // State to store selected seva

  const fetchSevas = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/sevas`);
      if (!res.ok) throw new Error("Failed to load sevas");
      const { data } = await res.json();

      const formattedData = data.map(
        (seva: {
          seva_id: number;
          name: string;
          description: string;
          base_price: string;
          name_kannada?: string;
          description_kannada?: string;
        }) => ({
          id: seva.seva_id,
          name: seva.name,
          description: seva.description,
          base_price: parseFloat(seva.base_price), // Convert to number
          name_kannada: seva.name_kannada,
          description_kannada: seva.description_kannada,
        })
      );

      setSevas(formattedData);
    } catch (err) {
      console.error(err);
      setError("Failed to load sevas. Please try again later.");
    }
  };

  useEffect(() => {
    fetchSevas();
  }, []);

  const toggleLanguage = () => {
    setShowKannada((prev) => !prev); // Toggle between languages
  };

  const handleSevaClick = (seva: Seva) => {
    setSelectedSeva(seva); // Set the selected seva to display in SevaForm
  };

  if (selectedSeva) {
    // If a seva is selected, render the SevaForm component
    return <SevaForm seva={selectedSeva} showKannada={showKannada} />;
  }

  return (
    <div className="container mx-auto p-6">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {sevas.length === 0 && !error && (
        <p className="text-center">No sevas available.</p>
      )}

      <div className="flex justify-center">
        <button
          onClick={toggleLanguage}
          className="mt-4 bg-orange-600 text-white py-2 px-6 rounded shadow hover:bg-orange-700 transition"
        >
          {showKannada ? "English" : "ಕನ್ನಡ"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {sevas.map((seva) => (
          <div
            key={seva.id}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleSevaClick(seva)} // Add onClick to each seva card
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {showKannada ? seva.name_kannada : seva.name}
            </h2>
            <p className="text-gray-600 mt-2">
              {showKannada ? seva.description_kannada : seva.description}
            </p>
            <p className="mt-4 font-bold text-lg">Price: ₹{seva.base_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
