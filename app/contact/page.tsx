"use client";
import React from "react";
import SEOComponent from "../cmpnents/SEOComponent";

const Contact: React.FC = () => {
  return (
    <>
    <SEOComponent
        title="Contact Shri Harihareshwara Temple"
        description="Get in touch with the Shri Harihareshwara Temple for inquiries, visits, or support. We welcome your communication and support."
        image="https://yourwebsite.com/images/temple-contact.jpg" // Replace with actual image URL
        url="http://www.shriharihareshwara.org/contact"
      />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#fdc8a0] p-10 relative font-serif">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-10">
        
        {/* Address and Contact Details */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-red-600 font-semibold text-lg uppercase mb-4 tracking-wide">Postal Address</h2>
          <p className="text-gray-800 mb-8">
            Shri Harihareshwara Temple,<br />
            Hariharapallathadka Post and Village,<br />
            Sullia Taluk, Dakshina Kannada,<br />
            PIN-574218
          </p>

          <h2 className="text-red-600 font-semibold text-lg uppercase mb-4 tracking-wide">Contact Detail</h2>
          <p className="text-gray-800">
            <strong>Contact Number:</strong> +919448116685, +918073030594
          </p>
          <p className="text-gray-800">
            <strong>President:</strong> +919481321850
          </p>
          <p>
            <strong>Tele:</strong> <span className="font-semibold">08257-283366</span>
          </p>
          <p>
            <strong>E-mail:</strong> <span className="italic">shriharihareshwara@gmail.com</span>
          </p>
        </div>

        {/* Google Map */}
        <div className="flex-1">
          <h2 className="text-red-600 font-semibold text-lg uppercase mb-4 tracking-wide">Google Map</h2>
          <div className="border border-gray-300 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14154.300532021494!2d75.6074572!3d12.618683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e497c13f1aa5%3A0x5592ade3cc59cc91!2sHarihareshwara%20Temple!5e1!3m2!1sen!2sin!4v1730361727124!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom orange bar */}
      <div className="absolute bottom-0 w-full h-1 bg-[#f28500]"></div>
    </div>
    </>
  );
};

export default Contact;
