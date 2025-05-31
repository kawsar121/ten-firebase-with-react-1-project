import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const [person, setPerson] = useState()
    const handleClick = () =>{
        signInWithPopup(auth,provider)
        .then((result) =>{
            console.log(result.user)
            setPerson(result.user)
        })
        .catch((error) => {
            console.log(error)
        })
       
    }   
     const HandleSignOut = () =>{
            signOut(auth)
            .then(()=>{
                console.log("out Done");
                setPerson(null)
            })
        }
    
    return (
        <div>
            <button onClick={handleClick}>Login</button>
            <button onClick={HandleSignOut}>SignOut</button>
            {person && <div><h2>{person.displayName}</h2> <img src={'person.photoURL'} alt="" srcset="" /> </div>  }
        </div>
    );
};

export default Login;