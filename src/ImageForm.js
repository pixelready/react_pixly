import { useState } from "react";
import EXIF from "exif-js";

function ImageForm({saveImage}) {
  //ADDED: image form handling, button to submit save?
  //Handle change and handle submit, form input state
  const [formData, setFormData] = useState(null);
  console.log("ImageForm!", formData);

  async function handleSubmit(evt) {
    evt.preventDefault();
    saveImage(formData);
  }
  //EXIF.pretty and EXIF.getTag
  //input file is a file like: {name: 'funnyImg.jpg', lastModified: ... , size: ..., type: "image/jpeg", ...}
  function handleChange(evt) {
    const imageFile = evt.target.files[0];
    console.log(imageFile);


    // EXIF.getData needs callback fn, setformData here? What is data look like?
    // possible: {image: "", exifdata: {location: ..., }}
    // TODO: fix setFormData handling image on change
    let data = EXIF.getData(imageFile, function () {
      let exifData = EXIF.pretty(imageFile);
      const make = EXIF.getTag(imageFile, "Make");
      console.log("exifData", make);
      setFormData((fData)=>({
          ...fData,
          image:imageFile,
          make:make,
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
