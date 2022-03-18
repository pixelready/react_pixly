import { useState } from "react";
import {Form, InputGroup, Input, FormText, Button, Card} from "reactstrap";


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
    <Card className="my-5 w-50 p-3 mx-auto shadow">
      <Form className="ImageForm mx-3 my-4" onSubmit={handleSubmit}>
        <InputGroup>
          <Input className="ImageForm-Input" type="file" onChange={handleChange} placeholder="upload a .jpeg or .jpg image" />
          <Button type="submit" className="ImageForm-Input">Save</Button>
        </InputGroup>
        <FormText>Upload an image to the gallery. Only <strong>.jpg</strong> or <strong>.jpeg</strong> images are allowed.</FormText>
      </Form>
    </Card>
  );
}

export default ImageForm;
