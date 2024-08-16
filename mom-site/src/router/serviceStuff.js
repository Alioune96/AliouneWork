import axios from "axios";

const buddy = axios.create({
    baseURL: import.meta.env.VITE_REMOTE_API
})

export default{
    getstyle(){
        return buddy.get('/hairlist')
    }
}
