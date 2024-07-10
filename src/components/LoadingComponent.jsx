import { bouncingCircles } from "../assets/images";

const LoadingComponent = () => {
  return (
    <div className=" w-full  h-full flex items-center justify-center">
      <img src={bouncingCircles} className="w-[150px] h-[50px]" />
    </div>
  );
};

export default LoadingComponent;
