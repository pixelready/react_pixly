import { useState } from "react";


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
    
   
    
      setFormFieldsData((fFData) => ({
        ...fFData,
        image: imageFile,
      }));
    
    
  }

  return (
    <form className="ImageForm" onSubmit={handleSubmit}>
      <input className="ImageForm-Input" type="file" onChange={handleChange} />
      <button className="ImageForm-Input">Save</button>
    </form>
  );
}

export default ImageForm;
