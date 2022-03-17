import { Route } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import ImageForm from "./ImageForm";
import PixlyApi from "./Models";
import ImageGallery from "./ImageGallery";
import { useEffect, useState } from "react";
import { ListGroupItemHeading } from "reactstrap";

function App() {
  const [images, setImages] = useState(null);

  async function saveImage(formData, formFieldsData) {
    // TODO: PixlyApi.post(formdata);
    console.log("formData in saveImage", formData, formFieldsData);
    const response = await PixlyApi.saveImage(formData, formFieldsData);
  }
  useEffect(function fetchImagesOnMount() {
    async function fetchImages() {
      if (images === null) {
        const images = await PixlyApi.getImages();
        setImages(images);
      }
    }
    fetchImages();
  }, [images]);

  if(images === null){
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Welcome to Pix.ly</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/upload">
            <ImageForm saveImage={saveImage} />
          </Route>
          <Route exact path="/">
            <ImageGallery images={images} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
