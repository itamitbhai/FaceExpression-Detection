import "../style/Face.scss"
import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";




export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const animationRef = useRef(null);
  const streamRef = useRef(null);


  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {

   
     init({landmarkerRef, videoRef, streamRef, setExpression});



    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (landmarkerRef.current) landmarkerRef.current.close();
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);



  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        style={{ width: "400px", borderRadius: "12px" }}
        playsInline
        autoPlay
        muted
      />
      <h2>{expression}</h2>
      <button className="button" onClick={() =>{detect({landmarkerRef, videoRef, setExpression})}}>Detect Expression</button>
    </div>
  );
}