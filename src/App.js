import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from './components/Categories.js';

const App = () => {
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


export default App;



