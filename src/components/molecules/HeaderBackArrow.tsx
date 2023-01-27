import React from "react";
import { Text } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import styled, { css } from "styled-components/native";

import BackButton from "../atoms/BackArrow";

const Container = styled.View<{ centerText: boolean }>`
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.centerText &&
    css`
      justify-content: space-between;
    `}
`;

const HeaderText = styled.Text<{ centerText: boolean }>`
  color: #0e0400;
  font-size: 18px;
  font-weight: 600;
  margin-left: ${wp("19.32%")}px;
  ${(props) =>
    props.centerText &&
    css`
      margin-left: 0px;
      margin-right: ${wp("11%")}px;
    `}
`;

const HeaderWithBackArrow = ({ goBack = () => {} }: { goBack?: Function }) => {
  return (
    <Container centerText={false}>
      <BackButton onPress={() => goBack()} />
    </Container>
  );
};

export default HeaderWithBackArrow;
