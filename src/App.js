import React from 'react'
import {ROUTES} from './services/route'
import {Link, Route, Routes} from "react-router-dom";

const Home = () => <button onClick={ROUTES.ABOUT.push}>
    Go to about
</button>;

const About = () => 'about';

function App() {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path={ROUTES.HOME.route} element={<Home/>}/>
            <Route path={ROUTES.ABOUT.route} element={<About/>}/>
        </Routes>
    </div>
}

export default App;
