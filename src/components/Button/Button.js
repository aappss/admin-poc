import React from 'react';
import { Button as ThemuiButton } from 'theme-ui';

 import PropTypes from 'prop-types';
 

  /** App  Button Design */
const Button = ({variant,size,children, ...rest}) => {
  
    return ( 

        <ThemuiButton variant={variant+size} {...rest}>{children}</ThemuiButton>
     );
}




Button.propTypes = {
    /**  Button Variant   # Primary| Secondary  */
    variant: PropTypes.string,
     /**  Button Variant   # default to large,  medium| small  */
    size: PropTypes.string,
     /**  Children component to be react component  */
    children:PropTypes.node
  };
  
  Button.defaultProps = {
    variant: 'primary',
    size:'',
  };
export default Button;

