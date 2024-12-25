import ScaleLoader from "react-spinners/ScaleLoader";

function Loading() {
  return (
    <div className="flex  w-full items-center justify-center h-screen">
      <ScaleLoader color="#28A745" />
    </div>
  );
}

export default Loading;
