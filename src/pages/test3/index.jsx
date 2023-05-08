import react from "react";
import Spline from '@splinetool/react-spline';

const Test3 = () => {
  const myScene = 'https://prod.spline.design/zg89L9I6NomNa8Eh/scene.splinecode';
  return (
    <div className="h-screen w-sreen">
      <Spline scene={myScene} />
    </div>
  )
}

export default Test1;