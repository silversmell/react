import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
/**const App = () => {
    return (
        <Router>
        <Routes>
            <Route element={<Categories />}>
                <Route path="/login" element={<Login />} />
            </Route>
            </Routes>
        </Router>
    );
};


export default App;**/
/**import Button from "./Button";**/

/**export default function App() {
    let name = 'park';
    let link = 'https://codingapple.com/unit/nextjs-page-layout/';
    return (
        <div>
            <h4 className="title">Apple fresh</h4>
            <p className="title-sub">by dev kim</p>
            <a href={link}>link</a>
        </div>
    );
}**/
function LoginPage() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form>
                <label>Email</label>
                <input type="email" value onChange></input>
                <label>Password</label>
                <input type="password" value onChange></input>
                <br></br>
                <button>Login</button>
            </form>
          </div>
          


    )
}
export default LoginPage








