import React, {Component} from "react";
import {Link} from "react-router-dom";

class CategorySelectionPage extends Component {

    //we have received custome props and cateogry throuh the route from App page let us take custome
    //category out of the props this is in 32 minutes (around) in the video

    

    render() {
        const {categories} = this.props;

        return(
            <div>
                <h1>CategorySelectionPage</h1>
            {/*34.06 minutes in the video */}
            <ul> 
                    {categories.map((item,index) =>{
                        return(
                            <li key={item}>
                                <Link to={`/entry/new/${index}`}>{item}</Link> {/* 40.34 minutes what happens if you dont put curly bracket? all turns red and why? */}
                            </li>
                        ) 
                    })}
                </ul> 
            </div>
        )
    }
}

export default CategorySelectionPage;