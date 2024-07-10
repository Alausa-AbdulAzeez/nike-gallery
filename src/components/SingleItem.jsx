import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Grid from "./Grid";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";

const SingleItem = ({ images }) => {
  // Navigation
  const navigate = useNavigate();

  // Extract id from URL
  const [itemIndex, setItemIndex] = useState(
    Number(new URLSearchParams(location.search).get("id"))
  );

  const randomImage = images.find((image, index) => {
    return index === itemIndex;
  });

  // Function to handle back click
  const handleBackClick = () => {
    navigate("/");
  };
  //End of function to handle back click

  useEffect(() => {}, [itemIndex]);

  const miniImages = [{}, {}, {}];

  // Inline style to set the background image
  const headerStyle = {
    backgroundImage: `url(${randomImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // style = { headerStyle };
  return (
    <div className=" flex flex-col items-center pb-10 overflow-w-auto md:overflow-hidden">
      <Navbar
        display={"back"}
        percentScrolled={0.4}
        handleBackClick={handleBackClick}
      />
      <div className="app__container flex flex-col w-full items-center relative">
        <div
          className="w-full h-full absolute top-0 left-0  -z-10 blur-lg"
          style={headerStyle}
        ></div>
        <div className="h-auto mt-[70px] md:mt-[30px] w-[90%] md:w[80%] max-w-[1024px] overflow-auto rounded-2xl shadow-custom-shadow-md p-4 flex flex-col gap-4">
          <div className="flex flex-col-reverse items-center gap-4  ">
            <div className="w-full pb-[8px]  flex justify-center ">
              <div
                className={`min-w-[200px]  w-fit flex image-card-scrollbar gap-6 px-4 pb-3 overflow-x-auto`}
              >
                {miniImages?.map((_, index) => {
                  return <ImageCard key={index} image={randomImage} />;
                })}
              </div>
            </div>

            <img
              src={randomImage}
              alt={`Image`}
              className="w-auto max-w-[320px] md:max-w-[640px] h-auto max-h-[420px] rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-1  ">
            <div className="title-small">Title</div>
            <p className="body-light">Lorem ipsum dolor sit</p>
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="title-small">Description</div>
            <div className="body-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              mollitia illo impedit perferendis quia dignissimos omnis
              architecto vero eius nobis.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="title-small">Other items</div>
            <Grid images={images} setItemIndex={setItemIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
