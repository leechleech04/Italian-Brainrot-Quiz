import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../colors';

const { width } = Dimensions.get('window');

const Container = styled.ScrollView`
  background-color: ${colors.beige};
  padding-top: 50px;
`;

const Title = styled.Text`
  font-size: 60px;
  font-family: 'PoetsenOne-Regular';
  text-align: center;
`;

const Image = styled.Image`
  width: ${width / 1.5}px;
  height: ${width / 1.5}px;
  border-radius: 20px;
  border: 5px solid ${colors.skyBlue};
  align-self: center;
  margin: 20px 0;
`;

const Detail = styled.Text`
  font-size: 24px;
  font-family: 'PoetsenOne-Regular';
  padding: 5px 20px;
`;

const DetailTitle = styled.Text`
  font-size: 30px;
  font-family: 'PoetsenOne-Regular';
  padding: 10px;
`;

const CardDetail = ({ route }: { route: any }) => {
  const { source, title, ability, motive } = route.params;

  return (
    <Container>
      <Title>{title}</Title>
      <Image source={source} />
      <DetailTitle>Abilities</DetailTitle>
      <Detail>{ability.join(', ')}</Detail>
      <DetailTitle>Motive</DetailTitle>
      <Detail>{motive.join(', ')}</Detail>
    </Container>
  );
};

export default CardDetail;
