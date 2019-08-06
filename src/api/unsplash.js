import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 6e0b857434ca6c5fbff69dcf601615f1d57837bcd4023f60a8db40e16e6fca57"
  }
});
