import { Route } from "react-router-dom";
import { useLocation, Switch} from "react-router-dom";
import "./App.css";
import ImageForm from "./ImageForm";
import Header from "./Header";
import PixlyApi from "./Models";
import ImageGallery from "./ImageGallery";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import {Container, Spinner} from "reactstrap";

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
    return (
    <Container>
      <Spinner>
        Loading...
      </Spinner>
    </Container>);
  }

  

    async function addSearchCriteria(searchTerm){
      const imageResults = await PixlyApi.getImages(searchTerm);
      setImages(images => imageResults);
      console.log("IMAGES STATE UPDATED:", images);
    }

  return (
    <Container fluid className="App">
      <Header />
      <Switch>
        <Route exact path="/upload">
          <ImageForm saveImage={saveImage} />
        </Route>
        <Route exact path="/">
          <SearchForm addSearchCriteria={addSearchCriteria} />
          <ImageGallery images={images} />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
