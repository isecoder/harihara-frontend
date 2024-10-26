import React from "react";

interface Seva {
  id: number;
  name: string;
  description: string;
  price: number;
}

const sevas: Seva[] = [
  {
    id: 1,
    name: "Abhishekam",
    description: "Ritual bathing of the deity",
    price: 500,
  },
  {
    id: 2,
    name: "Archana",
    description: "Special prayers and offerings",
    price: 300,
  },
  { id: 3, name: "Aarti", description: "Light offering ceremony", price: 200 },
  { id: 4, name: "Homa", description: "Fire ritual", price: 1000 },
];

const SevasList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-lg font-semibold mb-4 text-gray-800">Sevas List</h1>
      <ul className="w-full max-w-sm">
        {sevas.map((seva) => (
          <li key={seva.id} className="bg-white shadow-md rounded-lg p-2 mb-2">
            <h2 className="text-sm font-semibold text-gray-700">{seva.name}</h2>
            <p className="text-xs text-gray-600 mt-1">{seva.description}</p>
            <p className="text-gray-700 mt-2 font-bold text-xs">
              Price: ₹{seva.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SevasList;
