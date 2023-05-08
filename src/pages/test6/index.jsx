import react from "react";
import Spline from '@splinetool/react-spline';

const Test5 = () => {
  const myScene = 'https://prod.spline.design/tIG8AR8Ct4rZnKen/scene.splinecode';
  return (
    <div className="h-screen w-sreen">
      <Spline scene={myScene} />
    </div>
  )
}

export default Test5;