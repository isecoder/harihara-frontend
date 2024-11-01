import React, { useState, useEffect } from "react";

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

  const [loading, setLoading] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<{ message: string; bookingId?: number; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (confirmation?.type === 'error') {
      const timer = setTimeout(() => setConfirmation(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [confirmation]);

  const handleDismissConfirmation = () => setConfirmation(null);

  const handleCopyBookingId = () => {
    if (confirmation?.bookingId) {
      navigator.clipboard.writeText(confirmation.bookingId.toString());
      alert("Booking ID copied to clipboard!");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/sevaforms', {
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

        setConfirmation({
          message: `Seva submitted successfully! Booking ID: ${data.data.id}. Please show this ID at the temple for your Seva.`,
          bookingId: data.data.id,
          type: 'success',
        });

        setName("");
        setNakshathra("");
        setRashi("");
        setGotra("");
        setMobileNumber("");
        setMobileNumberConfirmation("");
        setDate("");
      } else {
        const errorData = await response.json();
        setConfirmation({
          message: errorData.message || 'Failed to create Seva.',
          type: 'error',
        });
      }
    } catch {
      setConfirmation({
        message: 'An unexpected error occurred.',
        type: 'error',
      });
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

        <div>
          <label htmlFor="nakshathra" className="block mb-1 text-gray-800 font-medium">
            {labels.nakshathra}
          </label>
          <input
            type="text"
            id="nakshathra"
            value={nakshathra}
            onChange={(e) => setNakshathra(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="rashi" className="block mb-1 text-gray-800 font-medium">
            {labels.rashi}
          </label>
          <input
            type="text"
            id="rashi"
            value={rashi}
            onChange={(e) => setRashi(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="gotra" className="block mb-1 text-gray-800 font-medium">
            {labels.gotra}
          </label>
          <input
            type="text"
            id="gotra"
            value={gotra}
            onChange={(e) => setGotra(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="mobileNumber" className="block mb-1 text-gray-800 font-medium">
            {labels.mobileNumber}
          </label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="mobileNumberConfirmation" className="block mb-1 text-gray-800 font-medium">
            {labels.mobileNumberConfirmation}
          </label>
          <input
            type="text"
            id="mobileNumberConfirmation"
            value={mobileNumberConfirmation}
            onChange={(e) => setMobileNumberConfirmation(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="date" className="block mb-1 text-gray-800 font-medium">
            {labels.date}
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white py-2 rounded-md shadow hover:bg-orange-700 transition w-full"
          disabled={loading}
        >
          {loading ? 'Submitting...' : labels.submit}
        </button>
      </form>

      {confirmation && (
        <div className={`p-4 rounded-lg mb-8 ${confirmation.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <div className="flex justify-between items-center">
            <p>
            {confirmation.type === 'success'
                ? showKannada
                  ? `ಸೇವಾ ಅರ್ಜಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ! ದಯವಿಟ್ಟು ಈ ID ಅನ್ನು ದೇವಸ್ಥಾನದಲ್ಲಿ ಸೇವೆಯನ್ನು ಸಲ್ಲಿಸಲು ತೋರಿಸಿ.`
                  : `Seva form submitted successfully! Please show this ID at the temple to perform your Seva.`
                : confirmation.message}

            </p>
            {confirmation.type === 'success' && (
              <button onClick={handleDismissConfirmation} className="ml-4 text-gray-600 font-bold">
                ×
              </button>
            )}
          </div>

          {confirmation.type === 'success' && confirmation.bookingId && (
            <div className="mt-2 flex items-center space-x-2">
              <span className="font-semibold">Booking ID:</span>
              <span>{confirmation.bookingId}</span>
              <button onClick={handleCopyBookingId} className="text-blue-500 underline">
                Copy
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SevaForm;
