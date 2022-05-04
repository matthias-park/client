import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
    return <div>PageOne
        <Link to="/pageTwo">Navigate to Page two</Link>
    </div>
}

const PageTwo = () => {
    return <div>PageTwo
        <Link to="/">Navigate to Page One</Link>
    </div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pageTwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;