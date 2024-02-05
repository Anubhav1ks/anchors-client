import { useNavigate } from "react-router-dom"

const Header = ({ isdashboard = false, title = "Dashnoard" }) => {
    const navigate = useNavigate()
    return (
        <header>
            <h1 onClick={() => navigate('/')}>{isdashboard ? title : "Short Links"}</h1>
            <div>
                {
                    !isdashboard && (
                        <>
                            <button onClick={() => navigate('/login')}>Login</button>
                            <button onClick={() => navigate('/signup')}>Signup</button>
                        </>
                    )
                }

            </div>
        </header>
    )
}
export default Header