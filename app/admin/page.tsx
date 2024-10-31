// app/admin/page.tsx
import React from "react";
import Link from "next/link"; // Import Link for navigation

const AdminPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Welcome to the Admin Dashboard
      </h2>
      <div className="flex flex-col space-y-4">
        <Link href="/admin/sevas">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Sevas
          </button>
        </Link>
        <Link href="/admin/news-updates">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            News Updates
          </button>
        </Link>
        <Link href="/admin/seva-booked-list">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Seva Booked List
          </button>
        </Link>
        <Link href="/admin/gallery">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
