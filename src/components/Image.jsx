const Image = ({ image, index, handleClick }) => {
  return (
    <div className="image-item" onClick={handleClick}>
      <img src={image} alt={`Image ${index}`} />
      <div className="image-overlay">
        <span>Image {index + 1}</span>
      </div>
    </div>
  );
};

export default Image;
