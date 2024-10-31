// app/admin/page.tsx
"use client"; // Ensure this component uses client-side rendering
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation

const AdminPage = () => {
  const [sevasCount, setSevasCount] = useState(0);
  const [newsUpdatesCount, setNewsUpdatesCount] = useState(0);
  const [sevaBookedListCount, setSevaBookedListCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchCounts = async () => {
    try {
      const [sevasRes, newsUpdatesRes, sevaBookedListRes, galleryRes] =
        await Promise.all([
          fetch("/api/sevas"),
          fetch("/api/newsupdates"),
          fetch("/api/sevaforms"),
          fetch("/api/images/batch"),
        ]);

      if (
        !sevasRes.ok ||
        !newsUpdatesRes.ok ||
        !sevaBookedListRes.ok ||
        !galleryRes.ok
      ) {
        throw new Error("Failed to fetch data");
      }

      const sevasData = await sevasRes.json();
      const newsUpdatesData = await newsUpdatesRes.json();
      const sevaBookedListData = await sevaBookedListRes.json();
      const galleryData = await galleryRes.json();

      // Set the counts assuming the API returns an array
      setSevasCount(sevasData.length); // Adjust based on your actual response structure
      setNewsUpdatesCount(newsUpdatesData.length);
      setSevaBookedListCount(sevaBookedListData.length);
      setGalleryCount(galleryData.length);
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
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Welcome to the Admin Dashboard
      </h2>
      <div className="flex flex-col space-y-4">
        {loading ? (
          <p>Loading counts...</p>
        ) : (
          <>
            <Link href="/admin/sevas">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                Sevas <CountAnimation count={sevasCount} />
              </button>
            </Link>
            <Link href="/admin/news-updates">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                News Updates <CountAnimation count={newsUpdatesCount} />
              </button>
            </Link>
            <Link href="/admin/seva-booked-list">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                Seva Booked List <CountAnimation count={sevaBookedListCount} />
              </button>
            </Link>
            <Link href="/admin/gallery">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                Gallery <CountAnimation count={galleryCount} />
              </button>
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

  return <span className="ml-2 font-bold">{displayCount}</span>;
};

export default AdminPage;
