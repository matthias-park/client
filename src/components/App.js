import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import Header from "./header";

const App = () => {
    return (
        <div className="">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/stream/new" exact component={StreamCreate} />
                    <Route path="/stream/edit" exact component={StreamEdit} />
                    <Route path="/stream/delete" exact component={StreamDelete} />
                    <Route path="/stream/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;