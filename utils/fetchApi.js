import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
         'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '9f33860451msha2d70418d2f2942p11759ejsn1fb817e1d9b1',  
      },
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};
