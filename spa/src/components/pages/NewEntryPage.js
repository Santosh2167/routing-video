import React, {Component} from "react";
import {Redirect,Link} from "react-router-dom";
import EntryForm from "./../forms/EntryForm";

class NewEntryPage extends Component {

    //state={category: this.props.categories[this.props.match.params.index]}
    state={cateogry:null, errorMessage:""}

    componentDidMount() {
        const category=this.props.categories[this.props.match.params.index];

        if(!category) {
            return this.setState({errorMessage: "Invalid Category"});
        }
        
        console.log(this.props.match.index);

        this.setState({category})
    }

    // render() {
    //     const {category} = this.state;
    //     return (
    //         <div>
    //             <h1>New {category} Page</h1>
    //         </div>
    //     )
    // }

    //new render after 50:57 minutes

    render() {
        const {category,errorMessage} = this.state;
        const {onEntryFormSubmit} = this.props; // this is imp. learn how to pass a function 
        if(errorMessage) {
            return <Redirect to="/category"/>
        }
        return (
            <div>
                {category && 
                <div>
                    <Link to="/category"><button>Back to Category</button></Link>
                    <h1>New {category} Page</h1>
                    <EntryForm onEntryFormSubmit={onEntryFormSubmit} category={category}/>
                </div>}
                {errorMessage} 
            </div>
        )
    }
}

export default NewEntryPage;