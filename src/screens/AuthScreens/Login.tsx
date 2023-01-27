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
import HeaderWithBackArrow from "../../components/molecules/HeaderBackArrow";
import InputField from "../../components/molecules/InputField";
import ButtonEl from "../../components/molecules/ButtonEl";
import { Text } from "react-native";
import PressableEl from "../../components/atoms/PressableEl";
import CreateAcc from "../../components/atoms/CreatAcct";
import { useNavigation } from "@react-navigation/native";

const Container = styled(CContainer)`
  flex-direction: column;
  padding-top: ${hp("10%")}px;
  padding-left: ${wp("7%")}px;
  padding-right: ${wp("7%")}px;
`;
const InfoText = styled(AppText)`
  padding-top: ${hp("10%")}px;
  padding-bottom: ${hp("10%")}px;
  font-size: 60px;
  line-height: ;
`;

const InputCon = styled.View`
  flex-direction: column;
  margin-bottom: ${hp("5%")}px;
`;

const OneInput = styled.View`
  margin-bottom: 10px;
`;
const ContinueCon = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${hp("7%")}px; ;
`;

const ContBorder = styled.Text`
  height: 1px;
  flex-grow: 1;
  background-color: #cacaca;
  margin: 10px;
`;

const SigninCon = styled(CenterContent)`
  flex-direction: row;
`;

const SigninText = styled(AppText)`
  color: yellow;
`;

const Login = () => {
  const navigation = useNavigation();
  const [stage, setStage] = useState("Sign in");
  return (
    <Fragment>
      <Container>
        <HeaderWithBackArrow />
        {stage === "Sign in" ? <CreateAcc /> : <CreateAcc />}

        <InputCon>
          <OneInput>
            <InputField type="email" placeholder="Email" />
          </OneInput>

          <InputField type="password" placeholder="Password" />
        </InputCon>
        <ButtonEl height={50} children="Sign Up" />
        <ContinueCon>
          <ContBorder />
          <Text>or continue with</Text>
          <ContBorder />
        </ContinueCon>
        <ContinueCon>
          <SigninCon>
            <Text>Already have an account ?</Text>
            <PressableEl onPress={() => navigation.navigate("login")}>
              <SigninText>Sign in</SigninText>
            </PressableEl>
          </SigninCon>
        </ContinueCon>
      </Container>
    </Fragment>
  );
};

export default Login;
