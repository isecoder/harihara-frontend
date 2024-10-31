export default function AddSevaForm() {
    return (
      <div className="bg-gradient-r from-white to-orange-200 shadow-md rounded p-4 mb-8">
        <h2 className="text-xl font-medium mb-4">Add New Seva</h2>
        <form>
          <label className="block mb-2">
            Seva Name:
            <input type="text" className="w-full border rounded p-2 mt-1" />
          </label>
          <label className="block mb-2">
            Description:
            <textarea className="w-full border rounded p-2 mt-1"></textarea>
          </label>
          <label className="block mb-2">
            Price:
            <input type="number" className="w-full border rounded p-2 mt-1" />
          </label>
          <button type="submit" className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">
            Add Seva
          </button>
        </form>
      </div>
    );
  }
  