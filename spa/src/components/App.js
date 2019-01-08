import React, { Component } from "react";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = {location: "home"}

    getPage() {
        const {location} = this.state;
        
        switch(location) {
            case "home":
                return <HomePage/>
            case "category":
                return <CategorySelectionPage/>
            case "entry":
                return <NewEntryPage/>
            default: 
                return null;
        }
    }

    onChangeLocation = (location) => {
        this.setState({location});
    }

    render() {
        const {location} = this.state;

        return(
            <div>
                <button onClick={()=>this.onChangeLocation("category")}>Category</button>
                <button onClick={()=>this.onChangeLocation("home")}>Home Page</button>
                <button onClick={()=>this.onChangeLocation("entry")}>NewEntryPage</button>
                {this.getPage()}
            </div>
        )
    }
}

export default App;