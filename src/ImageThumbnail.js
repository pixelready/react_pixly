import {Card} from "reactstrap";

function ImageThumbnail({ image }) {
  return (
    <div className="g-5">
    <Card className="col shadow">
      <figure className="ImageThumbnail">
        <img className="card-img-top" src={image.s3ImagePath} alt="thumbnail" />
        <figcaption className="card-body">{image.filename}</figcaption>
      </figure>
    </Card>
    </div>
  );
}

export default ImageThumbnail;