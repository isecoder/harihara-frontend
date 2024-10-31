// app/admin/page.tsx

import { redirect } from "next/navigation"; // Use next/navigation for redirection
import { cookies } from "next/headers"; // Import cookies from next/headers
import SevaBookedList from "./components/SevaBookedList";
import AddSevaForm from "./components/AddSevaForm";
import NewsUpdatesForm from "./components/NewsUpdatesForm";

export default async function AdminDashboard() {
  // Retrieve cookies on the server side
  const cookieStore = await cookies(); // Await the cookies
  const sessionId = cookieStore.get("sessionId"); // Adjust the cookie name to your setup

  if (!sessionId) {
    // If the session cookie doesn't exist, redirect to /admin/login
    redirect("/admin/login");
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <SevaBookedList />
      <AddSevaForm />
      <NewsUpdatesForm />
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to bottom, #fdfcf1, #f2b890)", // Background gradient color
    borderRadius: "5px",
    padding: "2rem",
    maxWidth: "600px",
    margin: "5% auto",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "24px",
    marginBottom: "1.5rem",
    color: "#333",
  },
};
