import {
  FaceLandmarker,
  FilesetResolver
} from "@mediapipe/tasks-vision";

 export const init = async ({ landmarkerRef, videoRef, streamRef, setExpression}) => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );

      landmarkerRef.current = await FaceLandmarker.createFromOptions(
        vision,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
          },
          outputFaceBlendshapes: true,
          runningMode: "VIDEO",
          numFaces: 1
        }
      );

      try {
        streamRef.current = await navigator.mediaDevices.getUserMedia({ video: true });
      } catch (err) {
        console.error(err);
        setExpression("Camera access denied ❌");
        return;
      }

      videoRef.current.srcObject = streamRef.current;
      await videoRef.current.play();



    };

   export const detect = ({landmarkerRef, videoRef, setExpression}) => {
  if (!landmarkerRef.current || !videoRef.current) return;

  const results = landmarkerRef.current.detectForVideo(
    videoRef.current,
    performance.now()
  );

  if (results.faceBlendshapes?.length > 0) {
    const blendshapes = results.faceBlendshapes[0].categories;

    console.log(blendshapes); // debug

    const getScore = (name) =>
      blendshapes.find((b) => b.categoryName === name)?.score || 0;

    const smileLeft = getScore("mouthSmileLeft");
    const smileRight = getScore("mouthSmileRight");
    const jawOpen = getScore("jawOpen");
    const browUp = getScore("browInnerUp");
    const frownLeft = getScore("mouthFrownLeft");
    const frownRight = getScore("mouthFrownRight");

    let currentExpression = "Neutral";

    if (smileLeft > 0.5 && smileRight > 0.5) {
      currentExpression = "happy";
    } else if (jawOpen > 0.6 && browUp > 0.5) {
      currentExpression = "surprised";
    } else if (frownLeft > 0.01 && frownRight > 0.01) {
      currentExpression = "sad";
    }

    setExpression(currentExpression);

    return currentExpression
    
  } else {
    setExpression("No face detected 😐");
  }
};

