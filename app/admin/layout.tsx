import { ReactNode } from "react";
import NotFound from "../not-found"; // Adjust the import path based on your structure

export default function AdminLayout({ children }: { children: ReactNode }) {
  const isAdminSubdomain =
    typeof window !== "undefined" &&
    window.location.hostname.startsWith("admin.");

  // Return custom 404 for non-admin access
  if (!isAdminSubdomain) {
    return <NotFound />;
  }

  return (
    <div>
      {children} {/* Render admin content here */}
    </div>
  );
}
