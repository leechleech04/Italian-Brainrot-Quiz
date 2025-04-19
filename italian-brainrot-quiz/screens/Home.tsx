import styled from 'styled-components/native';
import colors from '../colors';
import { Animated, Dimensions, Pressable } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const Container = styled(LinearGradient).attrs({
  colors: [colors.skyBlue, colors.blue, colors.skyBlue],
  start: { y: 0 },
  end: { y: 1 },
})`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
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
  border-radius: 20px;
  border: 3px solid ${colors.beige};
  width: ${width / 4}px;
  height: ${width / 4}px;
`;

const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DefinitionButton = styled.Pressable`
  background-color: ${colors.orange};
  border: 5px solid ${colors.beige};
  border-radius: 20px;
  padding: 10px 20px;
`;

const DefinitionButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
`;

const DefinitionModal = styled.Modal``;

const DefinitionModalContainer = styled.View`
  background-color: ${colors.beige};
  padding: 20px;
  border-radius: 20px;
  position: absolute;
  bottom: 0;
`;

const DefinitionModalTitle = styled.Text`
  font-size: 48px;
  text-align: center;
  font-family: 'PoetsenOne-Regular';
  margin: 20px;
`;

const DefinitionModalText = styled.Text`
  font-size: 20px;
  line-height: 28px;
  margin: 20px;
`;

const CloseModalButton = styled.Pressable`
  background-color: ${colors.orange};
  border-radius: 20px;
  margin: 20px;
  padding: 10px;
`;

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const titleScale = useRef(new Animated.Value(0)).current;
  const firstImageScale = useRef(new Animated.Value(0)).current;
  const secondImageScale = useRef(new Animated.Value(0)).current;
  const thirdImageScale = useRef(new Animated.Value(0)).current;
  const fourthImageScale = useRef(new Animated.Value(0)).current;
  const fifthImageScale = useRef(new Animated.Value(0)).current;
  const sixthImageScale = useRef(new Animated.Value(0)).current;
  const seventhImageScale = useRef(new Animated.Value(0)).current;
  const eighthImageScale = useRef(new Animated.Value(0)).current;

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
        Animated.spring(fifthImageScale, {
          toValue: 1,
          bounciness: 15,
          useNativeDriver: true,
        }),
        Animated.spring(sixthImageScale, {
          toValue: 1,
          bounciness: 15,
          useNativeDriver: true,
        }),
        Animated.spring(seventhImageScale, {
          toValue: 1,
          bounciness: 15,
          useNativeDriver: true,
        }),
        Animated.spring(eighthImageScale, {
          toValue: 1,
          bounciness: 15,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Animated.View
          style={{
            transform: [{ scale: firstImageScale }],
          }}
        >
          <Image
            source={require('../assets/italian-brainrot/TralaleroTralala.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: secondImageScale }],
          }}
        >
          <Image
            source={require('../assets/italian-brainrot/BombardiroCrocodilo.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: thirdImageScale }],
          }}
        >
          <Image
            source={require('../assets/italian-brainrot/TungTungTungTungTungTungTungTungTungSahur.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: fourthImageScale }],
          }}
        >
          <Image
            source={require('../assets/italian-brainrot/LirilìLarilà.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: fifthImageScale }],
          }}
        >
          <Image
            source={require('../assets/italian-brainrot/BonecaAmbalabu.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: sixthImageScale }],
          }}
        >
          <Image
            source={require('../assets/italian-brainrot/BrrBrrPatapim.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: seventhImageScale }],
          }}
        >
          <Image
            source={require('../assets/italian-brainrot/ChimpanziniBananini.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: eighthImageScale }],
          }}
        >
          <Image
            source={require('../assets/italian-brainrot/BombombiniGusini.jpg')}
          />
        </Animated.View>
      </ImageContainer>
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
      <DefinitionButton
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <DefinitionButtonText>What is Italian Brainrot?</DefinitionButtonText>
      </DefinitionButton>
      <DefinitionModal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <DefinitionModalContainer>
          <DefinitionModalTitle>Italian Brainrot</DefinitionModalTitle>
          <DefinitionModalText>
            "Italian brainrot" is an internet slang term describing a specific
            type of online content trend.{'\n'}It involves combining crude
            AI-generated images with very loose Italian phrases to create absurd
            and humorous videos.{'\n'}The term is used to refer to the concept
            of low-quality, mind-numbing content, often associated with the
            negative effects of excessive online consumption.
          </DefinitionModalText>
          <CloseModalButton
            onPress={() => {
              setIsModalVisible(false);
            }}
          >
            <DefinitionButtonText>Close</DefinitionButtonText>
          </CloseModalButton>
        </DefinitionModalContainer>
      </DefinitionModal>
    </Container>
  );
};

export default Home;
