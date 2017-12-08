import React, {PureComponent} from 'react';

class Label extends PureComponent {
   render() {
      const {label, className, ...restProps} = this.props;

      return (
         <span className={`${className}`} {...restProps} >{label}</span>
      );
   }
}

Label.defaultProps = {
   className: ''
};

export default Label;