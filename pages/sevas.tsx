import dynamic from "next/dynamic";
import LoadingSpinner from "../app/components/LoadingSpinner";

// Dynamically import Sevas component and use loading spinner as fallback
const Sevas = dynamic(() => import("../app/components/Sevas"), {
  loading: () => <LoadingSpinner />, // Display the loading spinner while loading
});

const SevasPage = () => {
  return (
    <div>
      <Sevas />
    </div>
  );
};
//test
export default SevasPage;
