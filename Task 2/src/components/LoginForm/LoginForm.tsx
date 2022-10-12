import {FormEvent, useState} from "react";
import {useAuth} from "../../context/auth.context";

export const LoginForm = ()=>{
    const {login,state} = useAuth();

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const handleForm = (e:FormEvent)=>{
        e.preventDefault();
        login({email,password})

    }

    return <>
        <h1>Login</h1>
        <form onSubmit={handleForm}>
            <div>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder={'Email'}/>

            </div>
            <div>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder={'Password'}/>

            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
            <h3> {state.error.length?state.error:<></>}</h3>


        </form>
    </>
}