import { useNavigate } from "react-router-dom";
import { removeToken } from "../../functions/Auth";

const Header = ({ isdashboard = false, title = "Dashboard" }) => {
  const navigate = useNavigate();
  return (
    <header>
      <h1 onClick={() => navigate("/")}>
        {isdashboard ? title : "Short Links"}
      </h1>
      <div>
        {!isdashboard ? (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </>
        ) : (
          <button
            onClick={() => {
              removeToken();
              navigate("/");
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </header>
  );
};
export default Header;
