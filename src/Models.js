import axios from "axios";

const BASE_URL = "http://localhost:3001";

class PixlyApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async saveImage(imageData) {
    // TODO: extract exif data
    // TODO: pass binary file to save
    // TODO: backend helper will write to file (fs)

    const response = await this.request(`images`, imageData, "post");
  }
}

export default PixlyApi;
