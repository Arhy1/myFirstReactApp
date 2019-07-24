import React from 'react';

export default class InputLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        };
    }

    handleTyping(event){
        this.setState({
            input: event.target.value //input here is refered to as typedText
        })

    }

    render() {

        return(
            <form onSubmit={(e) => { //this is same as the handleSubmit func
                e.preventDefault();
                this.setState({input: ''})
                this.props.addTodo(this.state.input)
            }}>
                <input value={this.state.input}
                onChange={(e) => {this.setState({ //same as the handleTyping func
                    input: e.target.value
                })}} name="taskName"></input>
                <input type="Submit" />
            </form>
        
        );
    }
}