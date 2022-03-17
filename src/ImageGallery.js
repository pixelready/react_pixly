import ImageThumbnail from "./ImageThumbnail";
import SearchForm from "./SearchForm";

function ImageGallery({ images }) {
  return (
    <div className="ImageGallery">
      {images.map((i) => (
        <ImageThumbnail image={i} key={i.id} />
      ))}
    </div>
  );
}

export default ImageGallery;
