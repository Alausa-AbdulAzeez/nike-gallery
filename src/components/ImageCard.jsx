const ImageCard = ({ image }) => {
  return (
    <div
      className={`border-2 rounded-xl  border-black cursor-pointer mx-auto md:mx-0`}
    >
      <div className=" rounded-xl">
        <img
          src={image}
          alt="img"
          className="rounded-lg w-[100px] h-auto max-w-none"
        />
      </div>
    </div>
  );
};

export default ImageCard;
