import Image from "next/image";

// Define the structure of your image data
interface ImageData {
  image_id: number;
  alt_text: string;
  signed_url: string;
}

// Fetch data in a Server Component
async function fetchImages(page: number, limit: number): Promise<ImageData[]> {
  const res = await fetch(
    `http://localhost:4000/api/images/batch?limit=${limit}&page=${page}`,
    {
      cache: "no-store", // Ensure fresh data on every request
    }
  );

  const data = await res.json();
  return data?.data?.images || [];
}

// The main ImageGallery component with SSR
export default async function ImageGallery({ searchParams }: { searchParams: { page?: string } }): Promise<JSX.Element> {
  // Await searchParams to ensure we can access it
  const pageParam = await searchParams;
  const currentPage = parseInt(pageParam.page as string) || 1; // Get current page from URL or default to 1
  const limit = 6; // Number of images to display per page

  const images = await fetchImages(currentPage, limit);

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.image_id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-full h-48">
              <Image
                src={image.signed_url}
                alt={image.alt_text || "Image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">{image.alt_text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <a
          href={`?page=${currentPage - 1}`}
          className={`px-4 py-2 bg-blue-500 text-white rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          style={{ pointerEvents: currentPage === 1 ? "none" : "auto" }}
        >
          Previous
        </a>
        <span className="self-center">Page {currentPage}</span>
        <a
          href={`?page=${currentPage + 1}`}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </a>
      </div>
    </div>
  );
}
