import { Html, useProgress } from '@react-three/drei'


const CanvasLoader = () => {
  const { progress } = useProgress(); // Destructure progress from the useProgress hook

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p className="text-sm text-[#f1f1f1] font-extrabold mt-10">
        {/* Check if progress is valid and display it */}
        {progress && !isNaN(progress) ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
