import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

export default function Authenticate({children}){
    const navigate = useNavigate()
    const {isAuthenticated} = useAuth0()
    if (isAuthenticated){
        return(
            <div>{children}</div>
        )
    }else{
        navigate("/")
    }
    return(
        <div class="loader">Loading...</div>
    )
}