import React, { Component } from "react";
import {BrowserRouter, Route,Link} from "react-router-dom";
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
                        <Link to="/">Home</Link><br/>
                         <Link to="/category">Category</Link><br/>
                         <Link to="/entry">Entry</Link><br/>
                        <Route path="/" component={HomePage}/>
                        <Route path="/test" component={HomePage}/>
                        <Route path="/category" component={HomePage}/>
                        <Route path="/category/test/:id" component={HomePage}/>
                        {/* <Route path="/category" component={CategorySelectionPage}/>
                        <Route path="/category/test/:id" component={NewEntryPage}/> */}


                    </div>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default App;