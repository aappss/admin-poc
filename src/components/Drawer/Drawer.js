import React from "react";

// import component 👇
import ModernDrawer from "react-modern-drawer";

//import styles 👇

const Drawer = ({ open, direction, onClose, children, ...rest }) => {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState);
  // };

  return ( 
    <>
      <ModernDrawer
        open={open}
        direction={direction}
        onClose={onClose}
        {...rest}
      >
        {children}
      </ModernDrawer>
    </>
  );
};

export default Drawer;
