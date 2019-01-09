import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = {
        categories: ["food","thoughts","romance"],
        entries: []
    }

    onEntryFormSubmit =(entry) => {
        this.setState((state)=>{
            return {entries: [...state.entries, entry]};
        })
    }

    render() {
    

        
        const {categories} = this.state;
        console.log(`this is props: ${this.props}`);

        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomePage}/>
                        <Route 
                            exact path="/category" 
                            render={(props)=>{ 
                                return <CategorySelectionPage {...props} categories={categories}/>
                            }}
                            
                        />
                        <Route 
                            exact
                            path="/entry/new/:index"
                            //    following render is kept in 42 minutes

                            render={(props)=>{ 
                                return <NewEntryPage {...props} categories={categories} onEntryFormSubmit={this.onEntryFormSubmit}/>
                            }}
                        
                        
                        
                        />
                        {/* <Route path="/test" component={HomePage}/>
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