import React from 'react';
import './EmptyState.css'

export default class EmptyState extends React.PureComponent {
    render() {
        return (
            <div className="EmptyState">
                <img className="EmptyState__icon"
                     src={this.props.icon}/>
                <div className="EmptyState__title">{this.props.title}</div>
            </div>
        );
    }
}