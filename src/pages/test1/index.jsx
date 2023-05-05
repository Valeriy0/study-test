import react from "react";
import Spline from '@splinetool/react-spline';

const Test1 = () => {
  const myScene = 'https://prod.spline.design/jGZTVD1HG5J06e-v/scene.splinecode';
  return (
    <div className="h-screen w-sreen">
      <Spline scene={myScene} />
    </div>
  )
}

export default Test1;