import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '9eb94c7edcmshd3c5fc2f25f79acp10c5a5jsn5460c8c25e4d',   
      },
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};
