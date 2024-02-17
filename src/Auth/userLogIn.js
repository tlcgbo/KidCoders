import { projectAuth } from "../Firebase/config";

let error = null

const login = async(email, password) => {
    error = null
    try{
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error = null
        console.log(res.user)
        return res
    }
    catch(err) {
        error = err.message
        console.log(error)
    }
} 

const userLogIn = () => {
   return{error, login}
}

export default userLogIn