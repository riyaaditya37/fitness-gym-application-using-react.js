export const exerciseOptions = {
   

      method: 'GET',
      
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    

  export const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': '8ba709fec1msh9dd70a971f2ff91p180518jsn3eec5c6c4ad5',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

   
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };