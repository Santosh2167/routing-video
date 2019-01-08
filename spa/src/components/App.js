import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = {location: "home"}

    render() {
        const {location} = this.state;

        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/category" component={CategorySelectionPage}/>
                        <Route exact path="/entry" component={NewEntryPage}/>


                    </div>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default App;