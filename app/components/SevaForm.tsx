import React, { useState } from "react";

interface Seva {
  id: number;
  name: string;
  description: string;
  base_price: number;
  name_kannada?: string;
  description_kannada?: string;
}

interface SevaFormProps {
  seva: Seva;
  showKannada: boolean;
}

const SevaForm: React.FC<SevaFormProps> = ({ seva, showKannada }) => {
  // Define state for the application form
  const [applicantName, setApplicantName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [dateOfSeva, setDateOfSeva] = useState("");
  const [timeOfSeva, setTimeOfSeva] = useState("");
  const [numberOfAttendees, setNumberOfAttendees] = useState(1);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log({
      applicantName,
      contactInfo,
      dateOfSeva,
      timeOfSeva,
      numberOfAttendees,
      additionalInfo,
      sevaId: seva.id,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-orange-600">
        {showKannada ? seva.name_kannada : seva.name}
      </h1>
      <p className="mt-2 text-gray-700 text-lg">
        {showKannada ? seva.description_kannada : seva.description}
      </p>
      <p className="mt-4 font-bold text-lg text-orange-600">
        Price: ₹{seva.base_price}
      </p>

      {/* Application Form */}
      <form onSubmit={handleSubmit} className="mt-6 bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="applicantName" className="block mb-1 font-semibold text-gray-800">
            Your Name
          </label>
          <input
            type="text"
            id="applicantName"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactInfo" className="block mb-1 font-semibold text-gray-800">
            Contact Information (Phone/Email)
          </label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dateOfSeva" className="block mb-1 font-semibold text-gray-800">
            Date of Seva
          </label>
          <input
            type="date"
            id="dateOfSeva"
            value={dateOfSeva}
            onChange={(e) => setDateOfSeva(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="timeOfSeva" className="block mb-1 font-semibold text-gray-800">
            Time of Seva (optional)
          </label>
          <input
            type="time"
            id="timeOfSeva"
            value={timeOfSeva}
            onChange={(e) => setTimeOfSeva(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfAttendees" className="block mb-1 font-semibold text-gray-800">
            Number of Attendees
          </label>
          <input
            type="number"
            id="numberOfAttendees"
            value={numberOfAttendees}
            onChange={(e) => setNumberOfAttendees(Number(e.target.value))}
            min={1}
            required
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="additionalInfo" className="block mb-1 font-semibold text-gray-800">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-700 transition"
        >
          Apply for Seva
        </button>
      </form>
    </div>
  );
};

export default SevaForm;
