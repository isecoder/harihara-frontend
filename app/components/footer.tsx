import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-700 to-orange-400 text-white py-10 px-10 md:px-10 lg:px-10 mt-[100rem]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
  
  {/* Logo and Title Section */}
  <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
    <div className="mb-8">
      <Image
        src="/logo.jpg"
        alt="Temple Logo"
        width={96}
        height={96}
        className="rounded-full"
        priority
      />
    </div>
    <p className="text-xl font-bold">ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ</p>

    {/* Social Media Icons */}
    <div className="flex space-x-8 mt-6">
      {/* Facebook Link */}
      <a href="https://www.facebook.com/shreeharihareshwara" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg
          className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          fill="currentColor"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
      </a>

      {/* Instagram Link */}
      <a href="https://www.instagram.com/shreeharihareshwara" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <svg
    className="w-6 h-7 text-white hover:text-blue-400 transition-colors duration-200"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16" // Updated viewBox for proper scaling
    fill="currentColor"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
  </svg>
</a>


      {/* YouTube Link */}
      {/* YouTube Link */}
{/* <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
  <svg
    className="w-6 h-6 text-white hover:text-red-600 transition-colors duration-200"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
  >
    <path d="M549.655 124.083C524.948 113.217 429.248 100.6 288 100.6c-141.251 0-236.951 12.617-261.655 23.483C3.42 135.35-2.144 169.06 0.018 192.156c3.04 43.51 7.804 105.627 13.124 153.42 3.35 29.74 15.4 55.358 35.42 72.895C75.68 439.052 139.44 448 288 448s212.32-8.948 239.438-29.53c20.02-17.538 32.07-43.155 35.42-72.895 5.32-47.794 10.083-109.91 13.124-153.42 2.162-23.097-3.398-56.807-25.327-68.073zM232 332.717V179.283l142.606 76.717L232 332.717z" />
  </svg>
</a> */}

    </div>
  </div>





        {/* Quick Links Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-6">≡ Quick Links</h3>
          <ul className="space-y-1">
            <li>
            <a href="/about" className="hover:underline hover:text-yellow-500 flex items-center">
    <span className="inline-block w-4 ">
      <span className="text-xs leading-4">►</span>
    </span>History
              </a>
            </li>
            <li>
            <a href="#" className="hover:underline hover:text-yellow-500 flex items-center">
    <span className="inline-block w-4 ">
      <span className="text-xs leading-4">►</span>
    </span>News
              </a>
            </li>
            <li>
            <a href="/sevas" className="hover:underline hover:text-yellow-500 flex items-center">
    <span className="inline-block w-4 ">
      <span className="text-xs leading-4">►</span>
    </span> Seva List
              </a>
            </li>
            <li>
  <a href="/gallery" className="hover:underline hover:text-yellow-500 flex items-center">
    <span className="inline-block w-4 ">
      <span className="text-xs leading-4">►</span>
    </span> Gallery
  </a>
</li>

          </ul>
        </div>

        {/* Address Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">
          <span className="text-ms font-normal">🛈</span>Address</h3>
          <address>
            <p>Shri Harihareshwara Temple,</p>
            <p>Hariharapallathadka Post and Village,</p>
            <p>Sullia Taluk, Dakshina Kannada</p>
            <p>PIN - 574218</p>
            <div className="flex items-center space-x-2">
            <svg
            
              width="15px"
              height="15px"
              className="e-font-icon-svg e-fas-phone-alt mt-1.5"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
             <path
    fill="white"  // Set the fill color to black
    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
  ></path> </svg>
            <p className="mt-0.5">9448116685</p>
            </div>

            <div className="flex items-center space-x-2">
            <svg
    width="15px"
    height="15px"
    className="e-font-icon-svg e-fas-envelope mt-1.5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5v2zM4 18v-8l8 5 8-5v8H4z" />
  </svg>
  <p

  className="mt-0.5 text-white hover:text-blue-400 transition-colors duration-200"
>
  shriharihareshwara@gmail.com
</p>

</div>



      
          </address>
        </div>

        {/* Map Section */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
        {/* <h3 className="text-lg font-semibold mb-2">Map</h3> */}
        <iframe
    title="Map Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16007.58945343131!2d75.5966208264565!3d12.621718820076161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e497c13f1aa5%3A0x5592ade3cc59cc91!2s!5e1!3m2!1sen!2sin!4v1730022730983!5m2!1sen!2sin"
    width="400"
    height="200"
    className="rounded-md shadow-lg"
    loading="lazy"
    style={{ border: 0 }} // Added to remove border
  ></iframe>
</div>

      </div>

      
    </footer>
  );
};

export default Footer;
