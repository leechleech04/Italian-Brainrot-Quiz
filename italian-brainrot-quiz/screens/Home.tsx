import styled from 'styled-components/native';
import colors from '../colors';
import { Animated, Dimensions, Pressable } from 'react-native';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const Container = styled(LinearGradient).attrs({
  colors: [colors.skyBlue, colors.blue, colors.skyBlue],
  start: { y: 0 },
  end: { y: 1 },
})`
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

const Image = styled.Image`
  width: ${width / 3}px;
  height: ${width / 3}px;
  border-radius: 20px;
  border: 5px solid ${colors.beige};
`;

const LeftTopBox = styled.View`
  position: absolute;
  top: 50px;
  left: 50px;
`;

const LeftBottomBox = styled.View`
  position: absolute;
  bottom: 50px;
  left: 50px;
`;

const RightTopBox = styled.View`
  position: absolute;
  top: 50px;
  right: 50px;
`;

const RightBottomBox = styled.View`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

const Home = () => {
  const titleScale = useRef(new Animated.Value(0)).current;
  const firstImageScale = useRef(new Animated.Value(0)).current;
  const secondImageScale = useRef(new Animated.Value(0)).current;
  const thirdImageScale = useRef(new Animated.Value(0)).current;
  const fourthImageScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(titleScale, {
        toValue: 1,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(firstImageScale, {
          toValue: 1,
          bounciness: 15,
          useNativeDriver: true,
        }),
        Animated.spring(secondImageScale, {
          toValue: 1,
          bounciness: 15,
          useNativeDriver: true,
        }),
        Animated.spring(thirdImageScale, {
          toValue: 1,
          bounciness: 15,
          useNativeDriver: true,
        }),
        Animated.spring(fourthImageScale, {
          toValue: 1,
          bounciness: 15,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Container>
      <LeftTopBox>
        <Pressable>
          <Animated.View
            style={{
              transform: [{ scale: firstImageScale }],
            }}
          >
            <Image
              source={require('../assets/italian-brainrot/TralaleroTralala.jpg')}
            />
          </Animated.View>
        </Pressable>
      </LeftTopBox>
      <LeftBottomBox>
        <Pressable>
          <Animated.View
            style={{
              transform: [{ scale: secondImageScale }],
            }}
          >
            <Image
              source={require('../assets/italian-brainrot/BombardiroCrocodilo.jpg')}
            />
          </Animated.View>
        </Pressable>
      </LeftBottomBox>
      <RightTopBox>
        <Pressable>
          <Animated.View
            style={{
              transform: [{ scale: thirdImageScale }],
            }}
          >
            <Image
              source={require('../assets/italian-brainrot/TungTungTungTungTungTungTungTungTungSahur.jpg')}
            />
          </Animated.View>
        </Pressable>
      </RightTopBox>
      <RightBottomBox>
        <Pressable>
          <Animated.View
            style={{
              transform: [{ scale: fourthImageScale }],
            }}
          >
            <Image
              source={require('../assets/italian-brainrot/LirilìLarilà.jpg')}
            />
          </Animated.View>
        </Pressable>
      </RightBottomBox>
      <Pressable
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
        <Animated.View
          style={{
            transform: [{ scale: titleScale }],
          }}
        >
          <Title>
            Italian{'\n'}Brainrot{'\n'}Quiz
          </Title>
        </Animated.View>
      </Pressable>
    </Container>
  );
};

export default Home;
