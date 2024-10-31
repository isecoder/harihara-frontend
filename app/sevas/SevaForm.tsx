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
  const [name, setName] = useState("");
  const [nakshathra, setNakshathra] = useState("");
  const [rashi, setRashi] = useState("");
  const [gotra, setGotra] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberConfirmation, setMobileNumberConfirmation] = useState("");
  const [date, setDate] = useState("");
  
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // New success message state
  const [bookingId, setBookingId] = useState<number | null>(null); // New booking ID state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    setError(null);
    setSuccessMessage(null); // Reset success message before the request

    try {
      const response = await fetch('/api/sevaform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          nakshathra,
          rashi,
          gotra,
          mobileNumber,
          mobileNumberConfirmation,
          date,
          sevaId: seva.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Seva created:', data);
        
        setBookingId(data.bookingId); // Set the booking ID from the response
        setSuccessMessage('Seva booked successfully!'); // Set success message

        setName("");
        setNakshathra("");
        setRashi("");
        setGotra("");
        setMobileNumber("");
        setMobileNumberConfirmation("");
        setDate("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to create Seva.');
        console.error('Failed to create Seva:', errorData);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const labels = {
    name: showKannada ? "ಹೆಸರು" : "Name",
    nakshathra: showKannada ? "ನಕ್ಷತ್ರ" : "Nakshathra",
    rashi: showKannada ? "ರಾಶಿ" : "Rashi",
    gotra: showKannada ? "ಗೋತ್ರ" : "Gotra (optional)",
    mobileNumber: showKannada ? "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ" : "Mobile Number",
    mobileNumberConfirmation: showKannada ? "ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯ ದೃಢೀಕರಣ" : "Mobile Number Confirmation",
    date: showKannada ? "ದಿನಾಂಕ" : "Date",
    submit: showKannada ? "ಸೇವೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" : "Apply for Seva",
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold text-orange-600 mb-2">
        {showKannada ? seva.name_kannada : seva.name}
      </h1>
      <p className="text-gray-600 mb-4">
        {showKannada ? seva.description_kannada : seva.description}
      </p>
      <p className="font-bold text-lg text-orange-600 mb-4">
        Price: ₹{seva.base_price}
      </p>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-600 mb-4">
          {successMessage} Booking ID: {bookingId}
        </p>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4 space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-gray-800 font-medium">
            {labels.name}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Other input fields for nakshathra, rashi, gotra, mobileNumber, mobileNumberConfirmation, and date */}

        <button
          type="submit"
          className="bg-orange-600 text-white py-2 rounded-md shadow hover:bg-orange-700 transition w-full"
          disabled={loading}
        >
          {loading ? 'Submitting...' : labels.submit}
        </button>
      </form>
    </div>
  );
};

export default SevaForm;
