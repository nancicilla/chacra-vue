import axios from "axios";
const chacraApi= axios.create(
    {
        baseURL:'http://localhost:3000/api/'
     
    }
)
 export{ chacraApi}