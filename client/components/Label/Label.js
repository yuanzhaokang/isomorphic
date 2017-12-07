import React, { PureComponent } from 'react';

class Label extends PureComponent {
    render() {
        const { label, className} = this.props;

        return (
            <span className={`${className}`} >{label}</span>
        );
    }
}

export default Label;