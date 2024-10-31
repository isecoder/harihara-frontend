// app/admin/page.tsx
"use client"; // Ensure this component uses client-side rendering
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation

const AdminPage = () => {
  const [sevasCount, setSevasCount] = useState(0);
  const [newsUpdatesCount, setNewsUpdatesCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [sevaFormsCount, setSevaFormsCount] = useState(0); // State for Seva Forms count
  const [loading, setLoading] = useState(true); // Loading state

  const fetchCounts = async () => {
    try {
      const [sevasRes, newsUpdatesRes, galleryRes, sevaFormsRes] =
        await Promise.all([
          fetch("/api/sevas"),
          fetch("/api/newsupdates"),
          fetch("/api/images/batch"),
          fetch("/api/sevaforms"), // Fetch Seva Forms count
        ]);

      if (
        !sevasRes.ok ||
        !newsUpdatesRes.ok ||
        !galleryRes.ok ||
        !sevaFormsRes.ok
      ) {
        throw new Error("Failed to fetch data");
      }

      const sevasData = await sevasRes.json();
      const newsUpdatesData = await newsUpdatesRes.json();
      const galleryData = await galleryRes.json();
      const sevaFormsData = await sevaFormsRes.json(); // Get Seva Forms data

      // Set the counts from the data arrays
      setSevasCount(sevasData.data.length); // Count the number of sevas
      setNewsUpdatesCount(newsUpdatesData.data.length); // Count the number of news updates
      setGalleryCount(galleryData.data.images.length); // Count the number of images in the gallery
      setSevaFormsCount(sevaFormsData.data.length); // Count the number of Seva Forms
    } catch (error) {
      console.error("Error fetching counts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-transparent">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Welcome to the Admin Dashboard
      </h2>
      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        {loading ? (
          <div className="flex justify-center items-center">
            <p className="text-lg">Loading counts...</p>
            <div className="ml-2 animate-spin h-5 w-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <>
            {/* Combined Sevas Box with Count Animation */}
            <Link href="/admin/sevas">
              <div className="flex flex-col items-center bg-green-500 text-white rounded-lg p-6 h-40 w-full sm:w-40 text-center cursor-pointer transition duration-200 hover:bg-green-600">
                <CountAnimation count={sevasCount} />
                <span className="text-lg font-bold">Sevas</span>
              </div>
            </Link>
            {/* Combined News Updates Box with Count Animation */}
            <Link href="/admin/news-updates">
              <div className="flex flex-col items-center bg-yellow-500 text-white rounded-lg p-6 h-40 w-full sm:w-40 text-center cursor-pointer transition duration-200 hover:bg-yellow-600">
                <CountAnimation count={newsUpdatesCount} />
                <span className="text-lg font-bold">News Updates</span>
              </div>
            </Link>
            {/* Combined Gallery Box with Count Animation */}
            <Link href="/admin/gallery">
              <div className="flex flex-col items-center bg-blue-500 text-white rounded-lg p-6 h-40 w-full sm:w-40 text-center cursor-pointer transition duration-200 hover:bg-blue-600">
                <CountAnimation count={galleryCount} />
                <span className="text-lg font-bold">Gallery</span>
              </div>
            </Link>
            {/* Combined Seva Forms Box with Count Animation */}
            <Link href="/admin/sevaforms">
              <div className="flex flex-col items-center bg-teal-500 text-white rounded-lg p-6 h-40 w-full sm:w-40 text-center cursor-pointer transition duration-200 hover:bg-teal-600">
                <CountAnimation count={sevaFormsCount} />
                <span className="text-lg font-bold">Seva Forms</span>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

// CountAnimation component to animate the number
const CountAnimation: React.FC<{ count: number }> = ({ count }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = count;
    const duration = 1000; // Duration of the animation in milliseconds
    const incrementTime = duration / end > 1 ? duration / end : 1; // Minimum increment interval

    const timer = setInterval(() => {
      if (start < end) {
        start++;
        setDisplayCount(start);
      } else {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [count]);

  return (
    <div className="font-bold text-3xl mb-2">{displayCount}</div> // Display count in a box
  );
};

export default AdminPage;
