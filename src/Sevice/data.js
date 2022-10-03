import axios from 'axios'
export const getData= async()=>
{
    let response=await axios.get('http://localhost:8080/JSPTutorial/getData');
   console.log(response);
    return response.data;
}
