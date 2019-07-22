import React from 'react';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <li>
                <button onClick={() => this.props.removeTodo()}>X</button>
                {this.props.taskName}
            </li>
        );
    }

}