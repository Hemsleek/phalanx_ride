import React from "react";
import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  AppText,
  CContainer,
  CenterContent,
} from "../../theme/style.component";
import { Fragment, useState } from "react";

const InfoText = styled(AppText)`
  padding-top: ${hp("10%")}px;
  padding-bottom: ${hp("10%")}px;
  font-size: 60px;
  line-height: ;
`;

const CreateAcc = () => {
  return <InfoText>Create your Account</InfoText>;
};

export default CreateAcc;
