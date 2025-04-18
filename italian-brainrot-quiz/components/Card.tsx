import styled from 'styled-components/native';
import colors from '../colors';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type CardNavigationProp = StackNavigationProp<RootStackParamList, 'CardDetail'>;

const Container = styled.Pressable`
  background-color: ${colors.blue};
  flex-direction: row;
  border: 5px solid ${colors.beige};
  border-radius: 20px;
  padding: 10px;
`;

const CardImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  align-self: center;
`;

const CardTitle = styled.Text`
  color: ${colors.beige};
  font-size: 24px;
  font-family: 'PoetsenOne-Regular';
  margin-left: 20px;
  align-self: center;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

const Card = ({
  source,
  title,
  ability,
  motive,
}: {
  source: ImageSourcePropType;
  title: string;
  ability: string[];
  motive: string[];
}) => {
  const navigation = useNavigation<CardNavigationProp>();

  return (
    <Container
      onPress={() => {
        navigation.navigate('CardDetail', {
          source,
          title,
          ability,
          motive,
        });
      }}
    >
      <CardImage source={source} />
      <CardTitle>{title}</CardTitle>
    </Container>
  );
};

export default Card;
