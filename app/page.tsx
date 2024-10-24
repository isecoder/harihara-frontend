import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Image Gallery</h1>

      {/* Button to navigate to the gallery */}
      <Link
        href="/gallery"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Go to Gallery
      </Link>
    </div>
  );
}
