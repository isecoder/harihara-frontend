import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="container mx-auto p-4 m-40 py-20 items-center text-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-center">Our Services</h1>
            <p className="text-lg mb-6 text-center">We offer a wide range of services to meet your needs.</p>
            <ul className="list-disc list-inside space-y-2">
                <li className="text-lg">Service 1: Description of service 1.</li>
                <li className="text-lg">Service 2: Description of service 2.</li>
                <li className="text-lg">Service 3: Description of service 3.</li>
            </ul>
        </div>
    );
};

export default Services;