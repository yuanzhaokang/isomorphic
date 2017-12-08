import React, { PureComponent } from 'react';

class Label extends PureComponent {
    render() {
        const { label, className} = this.props;

        return (
            <span className={`${className}`} >{label}</span>
        );
    }
}

Label.defaultProps = {
   className: ''
};

export default Label;