import {useAuth} from "../../context/auth.context";

export const WelcomeMessage = () =>{
    const {state} = useAuth()

    return <>
        <h1>Hello World, {state.email}</h1>
    </>
}