//this page is added on 1 hour of routing second video

import React, {Component} from "react";

class EntryForm extends Component {
    state={entry: ""}

    //the following is to make the component controlled
    onTextAreaChange=(event)=>{
        this.setState({entry: event.target.value})
    }

    render() {
        const {entry} = this.state;
        return (
            <form>
                <textarea value={entry} onChange={this.onTextAreaChange}></textarea><br/> {/*we cant type in the text area when trying to make
                it controlled 1.05 minutes in the video */}
                <input type="submit" value="Create A New Entry"></input>
            </form>
        )
    }
}

export default EntryForm;