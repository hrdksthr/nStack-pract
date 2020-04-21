import axios from "axios";
import { ServerLink } from "./../utils/environment";

class APIProvider {
  get = (url, obj1, headers) => {
    return new Promise((resolve, reject) => {
      axios({
        "method": "GET",
        "url": ServerLink + "/" + url,
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
          "x-rapidapi-key": "ea08be3fc6msh420291768b58982p13f2c5jsn6915183d2a2e"
        }, "params": {
          "ingr": obj1.ingr
        }
      })
        .then(response => {
          let data = { ...response.data, status: response.status };
          resolve(data);
        })
        .catch(({ response = {} }) => {
          let err = {
            ...response.data,
            status: response.status,
            statusText: response.statusText
          };
          reject(err);
        });
    });
  };

}

export default new APIProvider();
