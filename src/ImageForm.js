import { useState } from "react";
import EXIF from "exif-js";

function ImageForm({ saveImage }) {
  //ADDED: image form handling, button to submit save?
  //Handle change and handle submit, form input state
  const [formFieldsData, setFormFieldsData] = useState(null);
  console.log("ImageForm!", formFieldsData);

  async function handleSubmit(evt) {
    evt.preventDefault();

    let formData = new FormData();
  
    //Adding files to the formdata
    formData.append("image", formFieldsData.image);
    formData.append("name", "Name");

    saveImage(formData, formFieldsData);
  }
  //EXIF.pretty and EXIF.getTag
  //input file is a file like: {name: 'funnyImg.jpg', lastModified: ... , size: ..., type: "image/jpeg", ...}
  function handleChange(evt) {
    const imageFile = evt.target.files[0];
    console.log(imageFile);

    // EXIF.getData needs callback fn, setformData here? What is data look like?
    // possible: {image: "", exifdata: {location: ..., }}
    
    let data = EXIF.getData(imageFile, function () {
      // let exifData = EXIF.pretty(imageFile);
      const exifData = EXIF.getAllTags(imageFile);
      console.log("exifData", exifData);
      setFormFieldsData((fFData) => ({
        ...fFData,
        image: imageFile,
      }));
    });
    console.log("data", data);
  }

  return (
    <form className="ImageForm" onSubmit={handleSubmit}>
      <input className="ImageForm-Input" type="file" onChange={handleChange} />
      <button className="ImageForm-Input">Save</button>
    </form>
  );
}

export default ImageForm;
