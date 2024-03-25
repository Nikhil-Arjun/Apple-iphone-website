import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          {loading ? (
            <ClimbingBoxLoader color={"FEFDED"} loading={loading} size={100} />
          ) : (
            ""
          )}
        </div>
      </div>
    </Html>
  );
};

export default Loader;
