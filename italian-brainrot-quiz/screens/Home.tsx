import styled from 'styled-components/native';
import colors from '../colors';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { useEffect, useRef } from 'react';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
`;

const Title = styled.Text`
  font-size: 60px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
  line-height: 60px;
`;

const Home = () => {
  const titleScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(titleScale, {
      toValue: 1,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={() => {
          Animated.sequence([
            Animated.spring(titleScale, {
              toValue: 0.8,
              bounciness: 0,
              speed: 50,
              useNativeDriver: true,
            }),
            Animated.spring(titleScale, {
              toValue: 1,
              bounciness: 15,
              useNativeDriver: true,
            }),
          ]).start();
        }}
      >
        <Animated.Text
          style={{
            transform: [{ scale: titleScale }],
          }}
        >
          <Title>
            Italian{'\n'}Brainrot{'\n'}Quiz
          </Title>
        </Animated.Text>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Home;
