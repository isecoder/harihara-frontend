import SevaBookedList from "./components/SevaBookedList";
import AddSevaForm from "./components/AddSevaForm";
import NewsUpdatesForm from "./components/NewsUpdatesForm";

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
      <SevaBookedList />
      <AddSevaForm />
      <NewsUpdatesForm />
    </div>
  );
}
