
const apiUrl = process.env.REACT_APP_rapid_API_Key

 const url = 'https://walmart-api4.p.rapidapi.com/shop_id=6594&page=1';

 const options = {
     method: 'GET',
     headers: {
          'X-RapidAPI-Key': apiUrl,
          'X-RapidAPI-Host': 'walmart-api4.p.rapidapi.com',
     }
 };

 try{
     const response  = await fetch(url, options)
     const data = await response.text()
     console.log(data)
 } catch (e) {
     console.error(e)
 }