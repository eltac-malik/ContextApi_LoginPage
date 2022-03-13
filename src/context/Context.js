import {createContext,useState,useEffect} from 'react'
import axios from 'axios';

const Context = createContext();

export const Prov = ({children}) => 
{


    const [users, setUsers] = useState("");

     const getdata = async () => {
         const users1 = await axios.get("https://reqres.in/api/users?page=1")
         .then(resp => resp.data.data)
         const users2 = await axios.get("https://reqres.in/api/users?page=2")
         .then(resp => resp.data.data)

         const allusers = [...users1,...users2]
         setUsers(allusers);


     }


    const [currentuser,setCurrentuser] = useState("");

    const values = {users,setCurrentuser,currentuser}

    useEffect(()=>{
        getdata();
        
    },[])



    console.log(values);

    return <Context.Provider value={values}>{children}</Context.Provider>
}

export default Context;