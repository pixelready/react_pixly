
import './App.css';
import ImageForm from './ImageForm';
import PixlyApi from './Models';

function App() {


  async function saveImage(formData){
    // TODO: PixlyApi.post(formdata);
    console.log("formData in saveImage", formData);
    const response = await PixlyApi.saveImage(formData);
  }




  return (
    <div className="App">
      <h1>Welcome to Pix.ly</h1>
      <ImageForm saveImage={saveImage}/>
    </div>
  );
}

export default App;
