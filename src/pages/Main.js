import React from 'react';
import styled from 'styled-components'
import { View, Text, Button, ScrollView } from 'react-native';

function Main({ navigation }) {
  return (
    <ScrollView>
      <Container>
        <TitleBox>
          <Title>이정곤의 가계부</Title>
          <Profile/>
        </TitleBox>
        <MyInfoBox>
          <MyInfo>
            <InfoTitle>이정곤의 잔액</InfoTitle>
          </MyInfo>
          <MyMoney>
            <MoneyInfo>
              1,870,000 원
            </MoneyInfo>
          </MyMoney>
        </MyInfoBox>
        <SubInfoBox>
          <SubContent>
            <SubTitle>수 입</SubTitle>
            <SubLText>+2,340,000 원</SubLText>
          </SubContent>
          <Sun/>
          <SubContent>
            <SubTitle>지 출</SubTitle>
            <SubRText>-1,345,000 원</SubRText>
          </SubContent>
        </SubInfoBox>
      </Container>
    </ScrollView>
  )
}
export default Main

const SubInfoBox = styled.View`
  margin-top: 30px;
  width: 90%;
  height: 100px;
  border-radius: 10px;
  background: #fff;
  flex-direction: row;
  align-items: center;
`;

const Sun = styled.View`
  width: .4%;
  height: 30%;
  background: #eee;
  
`;

const SubContent = styled.View`
  width: 49.6%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubLText = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: #2ce71b;
`;

const SubRText = styled.Text`
  color: #e71b1b;
  font-size: 20px;
  font-weight: 900;
`;

const MyInfoBox = styled.View`
  width: 90%;
  height: 200px;
  border-radius: 10px;
  background: #fff;
`;

const MyInfo = styled.View`
  width: 100%;
  padding: 20px;
`;

const InfoTitle = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Noto Sans KR';
`;

const MyMoney = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const MoneyInfo = styled.Text`
  color: #333;
  font-size: 34px;
  font-weight: bold;
  font-family: 'Noto Sans KR';
`;

const Container = styled.View`
  background: #f1f1f1;
  display: flex;
  align-items: center;
  width: 100%;
`; 

const TitleBox = styled.View`
  flex-direction: row;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  width: 90%;
`;

const Title = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Noto Sans KR';
`;

const Profile = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #333;
`;