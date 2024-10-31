export default function NewsUpdatesForm() {
    return (
      <div className="bg-gradient-to-r from-white to-orange-300 shadow-md rounded p-4 mb-8">
        <h2 className="text-xl font-medium mb-4">Add News and Updates</h2>
        <form>
          <label className="block mb-2">
            Title:
            <input type="text" className="w-full border rounded p-2 mt-1" />
          </label>
          <label className="block mb-2">
            Content:
            <textarea className="w-full border rounded p-2 mt-1"></textarea>
          </label>
          <button type="submit" className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">
            Add News
          </button>
        </form>
      </div>
    );
  }
  