import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const randomId = Math.floor(Math.random()*100);

const getData = async ()=>{
    const response = await axios.get(`${BASE_URL}/${randomId}`);
        return response.data ;
}
export { getData };