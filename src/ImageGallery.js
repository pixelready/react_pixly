import ImageThumbnail from "./ImageThumbnail";

function ImageGallery({ images }) {
  if (images.length === 0) {
    return (
      <div className="row">
        <div className="col px-5 text-center fs-3 text-muted">
          No images found
        </div>
      </div>
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
