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
    <div className="ImageGallery row row-cols-3 px-5">
      {images.map((i) => (
        <ImageThumbnail image={i} key={i.id} />
      ))}
    </div>
  );
}

export default ImageGallery;
