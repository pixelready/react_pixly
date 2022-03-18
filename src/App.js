import { Route } from "react-router-dom";
import { useLocation, BrowserRouter, Switch, Link } from "react-router-dom";
import "./App.css";
import ImageForm from "./ImageForm";
import NavBar from "./NavBar";
import PixlyApi from "./Models";
import ImageGallery from "./ImageGallery";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

function App() {
  const location = useLocation() || "/";
  console.log(location);
  const [images, setImages] = useState(null);

  async function saveImage(formData, formFieldsData) {
    console.log("formData in saveImage", formData, formFieldsData);
    const response = await PixlyApi.saveImage(formData, formFieldsData);
  }

  useEffect(
    function fetchImagesOnMount() {
      async function fetchImages() {
        const images = await PixlyApi.getImages();
        setImages(images);
      }
      fetchImages();
    },
    [location]
  );

  if (images === null) {
    return <h1>Loading...</h1>;
  }

  

    async function addSearchCriteria(searchTerm){
      const imageResults = await PixlyApi.getImages(searchTerm);
      setImages(images => imageResults);
      console.log("IMAGES STATE UPDATED:", images);
    }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/upload">
          <ImageForm saveImage={saveImage} />
        </Route>
        <Route exact path="/">
          <SearchForm addSearchCriteria={addSearchCriteria} />
          <ImageGallery images={images} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
