"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // Adjust the import if needed

interface NewsUpdate {
  news_id: number;
  title: string;
  content: string;
  title_kannada?: string;
  content_kannada?: string;
  created_at: string;
}

export default function NewsUpdates(): JSX.Element {
  const [newsUpdates, setNewsUpdates] = useState<NewsUpdate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const showKannada = useSelector((state: RootState) => state.locale.locale === "kn");

  const fetchNewsUpdates = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/newsupdates`);
      if (!res.ok) throw new Error("Failed to load news updates");

      const { data } = await res.json();
      const formattedData = data.map((news: {
        news_id: number;
        title: string;
        content: string;
        title_kannada?: string;
        content_kannada?: string;
        created_at: string;
      }) => ({
        news_id: news.news_id,
        title: news.title,
        content: news.content,
        title_kannada: news.title_kannada,
        content_kannada: news.content_kannada,
        created_at: new Date(news.created_at).toLocaleDateString(),
      }));

      setNewsUpdates(formattedData);
    } catch (err) {
      console.error(err);
      setError("Failed to load news updates. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsUpdates();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading && <LoadingSpinner />}
      {!loading && newsUpdates.length === 0 && !error && (
        <p className="text-center">No news updates available.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {newsUpdates.map((news) => (
          <div
            key={news.news_id}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {showKannada ? news.title_kannada : news.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {showKannada ? news.content_kannada : news.content}
            </p>
            <p className="text-sm text-gray-500 mt-4">Date: {news.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
