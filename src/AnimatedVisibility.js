import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

function AnimatedVisibility({
  visible,
  children,
  animationOutDuration,
  ...rest
}) {
  const [noDisplay, setNoDisplay] = useState(!visible);
  useEffect(() => {
    if (!visible) {
      const delay = animationOutDuration - 350;
      setTimeout(() => setNoDisplay(true), delay);
    } else setNoDisplay(false);
  }, [visible]);

  const style = noDisplay ? { display: "none" } : null;
  return (
    <Animated isVisible={visible} style={style} {...rest}>
      {children}
    </Animated>
  );
}

AnimatedVisibility.defaultProps = {
  animationOutDuration: 1000,
  visible: true
};

AnimatedVisibility.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  animationOutDuration: PropTypes.number,
  visible: PropTypes.bool
};

export default AnimatedVisibility;
