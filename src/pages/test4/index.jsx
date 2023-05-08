import react from "react";
import Spline from '@splinetool/react-spline';

const Test4 = () => {
  const myScene = 'https://prod.spline.design/0TngxYuEndnG08W4/scene.splinecode';
  return (
    <div className="h-screen w-sreen">
      <Spline scene={myScene} />
    </div>
  )
}

export default Test4;