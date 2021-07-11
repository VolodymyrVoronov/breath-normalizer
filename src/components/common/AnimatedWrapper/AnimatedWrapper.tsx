import React from "react";
// @ts-ignore
import Animate from "react-smooth";

interface IProps {
  children: React.ReactNode;
  duration?: number;
}

const AnimatedWrapper = ({ children, duration = 3000 }: IProps): React.ReactElement => {
  return (
    <Animate to="1" from="0" attributeName="opacity" duration={duration}>
      {children}
    </Animate>
  );
};

export default AnimatedWrapper;
