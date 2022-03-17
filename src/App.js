import { Route } from "react-router-dom";
import { useLocation, BrowserRouter, Switch, Link } from "react-router-dom";
import "./App.css";
import ImageForm from "./ImageForm";
import NavBar from "./NavBar";
import PixlyApi from "./Models";
import ImageGallery from "./ImageGallery";
import { useEffect, useState } from "react";


function App() {
  //const location = useLocation() || '/';
  //console.log(location);
  const [images, setImages] = useState(null);

  async function saveImage(formData, formFieldsData) {
    // TODO: PixlyApi.post(formdata);
    console.log("formData in saveImage", formData, formFieldsData);
    const response = await PixlyApi.saveImage(formData, formFieldsData);
  }

  useEffect(function fetchImagesOnMount() {
    async function fetchImages() {
        const images = await PixlyApi.getImages();
        setImages(images);
    }
    fetchImages();
  }, []);

  if(images === null){
    return <h1>Loading...</h1>;
  }

  if(images.length === 0){
    return(
      <h1>No images found, want to<Link exact to="/upload">Upload one?</Link></h1>
    )
    
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
