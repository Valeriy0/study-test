import react from "react";
import Spline from '@splinetool/react-spline';

const Test5 = () => {
  const myScene = 'https://prod.spline.design/6ujcm7xlOSKmeyew/scene.splinecode';
  return (
    <div className="h-screen w-sreen">
      <Spline scene={myScene} />
    </div>
  )
}

export default Test5;