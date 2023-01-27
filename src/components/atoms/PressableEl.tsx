import React, { Fragment, ReactElement } from "react";
import styled from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface IProps {
  onPress?: Function;
  children: ReactElement;
  underlayColor?: string;
  disabled?: boolean;
  increaseTouchableArea?: boolean;
}

const Pressable = styled.Pressable``;

const PressableArea = styled.View`
  padding-vertical: ${hp("1%")}px;
  padding-horizontal: ${wp("2%")}px;
  justify-content: center;
  align-items: center;
`;

const PressableEl = ({
  onPress = () => {},
  children,
  underlayColor,
  disabled = false,
  increaseTouchableArea = false,
}: IProps) => {
  return (
    <Pressable
      disabled={disabled}
      underlayColor={underlayColor ?? "transparent"}
      onPress={onPress}
    >
      {increaseTouchableArea ? (
        <PressableArea>{children}</PressableArea>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Pressable>
  );
};

export default PressableEl;
