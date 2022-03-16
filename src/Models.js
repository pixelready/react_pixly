import axios from "axios";

const BASE_URL = "http://localhost:3001";

class PixlyApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    
    const params = method === "get" ? data : {};
    const headers = {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async saveImage(imageData, imageMetaData) {
    // TODO: extract exif data
    // TODO: pass binary file to save
    // TODO: backend helper will write to file (fs)

    const response = await this.request(`images`,imageData, "post");
    console.log("frontend API response:", response);
  }
}

export default PixlyApi;
