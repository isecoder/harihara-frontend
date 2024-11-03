"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // Adjust the import if needed
import SevaForm from "./SevaForm"; // Ensure SevaForm is correctly imported
import LoadingSpinner from "../components/LoadingSpinner"; // Import the LoadingSpinner component

interface Seva {
  id: number;
  name: string;
  description: string;
  base_price: number;
  name_kannada?: string; // Kannada name
  description_kannada?: string; // Kannada description
}

const SevasList = (): JSX.Element => {
  const showKannada = useSelector(
    (state: RootState) => state.locale.locale === "kn"
  ); // Track language from Redux state

  const [sevas, setSevas] = useState<Seva[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedSeva, setSelectedSeva] = useState<Seva | null>(null); // State to store selected seva
  const [loading, setLoading] = useState(false); // Loading state

  const fetchSevas = async () => {
    setLoading(true); // Start loading
    try {
      const res = await fetch(`/api/sevas`);
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
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchSevas();
  }, []);

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
      {loading && <LoadingSpinner />} {/* Show loading spinner while fetching */}
      {!loading && sevas.length === 0 && !error && (
        <p className="text-center">No sevas available.</p>
      )}

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
};

export default SevasList;
