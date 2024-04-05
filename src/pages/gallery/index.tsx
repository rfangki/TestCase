import Mountain from "../../assets/mountain.jpg";
import "../../styles/gallery.css";
const Gallery = () => {
  return (
    <div className="gallery">
      <img className="image" src={Mountain} alt="Mountain 1" />
      <img className="image" src={Mountain} alt="Mountain 2" />
      <img className="image" src={Mountain} alt="Mountain 3" />
      <img className="image" src={Mountain} alt="Mountain 4" />
    </div>
  );
};

export default Gallery;
