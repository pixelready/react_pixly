import ImageThumbnail from './ImageThumbnail';

function ImageGallery({images}){

    return(
        <div className="ImageGallery">
            {images.map(i => <ImageThumbnail image={i} key={i.id}/>)}
        </div>
    )

}

export default ImageGallery;