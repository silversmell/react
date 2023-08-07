import 'bootstrap/dist/css/bootstrap.min.css';


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
import React, { useEffect } from 'react'
import axios from 'axios'
// import { response } from 'express'

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response.data))
    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>start page</h2>
        </div>
    )
}

export default LandingPage








