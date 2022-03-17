function ImageThumbnail({ image }) {
  return (
    <figure className="ImageThumbnail">
      <img src={image.s3ImagePath} alt="thumbnail" />
      <figcaption>{image.filename}</figcaption>
    </figure>
  );
}

export default ImageThumbnail;