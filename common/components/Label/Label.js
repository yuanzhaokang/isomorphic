import React, {PureComponent} from 'react';
import './label.scss';

class Label extends PureComponent {
   render() {
      const {label, className, ...restProps} = this.props;

      return (
         <span className={`label ${className}`} {...restProps} >{label}</span>
      );
   }
}

Label.defaultProps = {
   className: ''
};

export default Label;