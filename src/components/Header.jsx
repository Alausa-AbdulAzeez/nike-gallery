import { Arrow } from "../assets/images";

const Header = () => {
  const images = [
    "https://images.pexels.com/photos/24738591/pexels-photo-24738591/free-photo-of-a-blue-and-white-pattern-with-squares.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/24405947/pexels-photo-24405947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1000",
    "https://images.pexels.com/photos/24868637/pexels-photo-24868637.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1000",
  ];
  // Select a random image URL from the 'images' prop array
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Inline style to set the background image
  const headerStyle = {
    backgroundImage: `url(${randomImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="app__container h-[80vh] w-full" style={headerStyle}>
      <div className="app__container absolute w-full bg-black bg-opacity-50 flex items-center justify-center h-[80vh]">
        <div className="text-center ">
          <h1 className="display-medium lg:display-large text-white mx-auto w-[80%] mb-4">
            Collections like no-other
          </h1>
          <img
            src={Arrow}
            alt="Arrow down"
            className="h-[180px] lg:h-[220px] w-auto mx-auto animate-slide-up-down"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
