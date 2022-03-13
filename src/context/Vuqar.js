import {createContext,useState,useEffect} from 'react'
import axios from 'axios';

const vuqar = createContext();


export const Eltac = ({children}) =>
{
    
        const [vuq2,setVuq2] = useState("");
    
        const [usr,setUsr] = useState({username:"",password:""});
    
        const abdulla = {vuq2,usr,setUsr}
    
    useEffect(()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(resp => setVuq2(resp.data))
    },[])

    return <vuqar.Provider value={abdulla}>{children}</vuqar.Provider>
}

export default vuqar;
