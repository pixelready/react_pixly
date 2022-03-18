import ImageThumbnail from "./ImageThumbnail";

function ImageGallery({ images }) {
  if (images.length === 0) {
    return (
      <strong>
        No images found
      </strong>
    );
  }

  return (
    <div className="ImageGallery">
      {images.map((i) => (
        <ImageThumbnail image={i} key={i.id} />
      ))}
    </div>
  );
}

export default ImageGallery;
