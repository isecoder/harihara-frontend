import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-200 to-orange-400 text-white py-14 px-4 md:px-8 lg:px-16 mt-[100rem] border b">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img 
            src="/logo.jpg" 
            alt="Temple Logo" 
            className="w-24 h-24 mb-6"
          />
          <p className="text-xl font-bold">
            ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">History</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Seva List</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p>Shri Harihareshwara Temple,</p>
          <p>Hariharapallathadka Post and Village,</p>
          <p>Sullia Taluk, Dakshina Kannada</p>
          <p>PIN-574218</p>
          <p className="mt-2">📞 9448116685</p>
        </div>

        {/* Map Section */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <iframe
            title="Temple Location"
            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
            width="400"
            height="200"
            className="rounded-md shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
