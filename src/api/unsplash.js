import axios from 'axios';

// this creates an instance of axios with preset properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b6b80aa08bf9c3b64bac2b6a887a6e7cd330c41543f4fe2923ff330e71f4923d'
  }
});