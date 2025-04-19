import styled from 'styled-components/native';
import ImageSources from '../ImageSources';
import colors from '../colors';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { keyframes } from 'styled-components';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background-color: ${colors.orange};
  align-items: center;
  justify-content: center;
`;

const HelpModal = styled.Modal``;

const HelpModalContainer = styled.View`
  background-color: ${colors.beige};
  padding: 20px;
  border-radius: 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HelpModalText = styled.Text`
  font-size: 24px;
  color: ${colors.orange};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
  margin-bottom: 20px;
`;

const HelpModalCloseButton = styled.Pressable`
  background-color: ${colors.orange};
  border-radius: 20px;
  padding: 10px 30px;
`;

const HelpModalCloseButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
`;

const HelpButton = styled.Pressable`
  position: absolute;
  top: 40px;
  right: 20px;
`;

const QuizNumber = styled.Text`
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
  font-size: 60px;
  position: absolute;
  top: ${height / 20}px;
  left: ${width / 10}px;
`;

const QuestionImage = styled.Image`
  width: ${width / 2}px;
  height: ${width / 2}px;
  border-radius: 20px;
  border: 5px solid ${colors.beige};
  margin: 20px;
`;

const QuestionText = styled.Text`
  font-size: 36px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
`;

const OptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const ImageOptionBox = styled.Pressable``;

const TextOptionBox = styled.Pressable`
  margin-top: 10px;
  border: 3px solid ${colors.beige};
  border-radius: 20px;
  padding: 10px;
`;

const OptionImage = styled.Image`
  width: ${width / 3}px;
  height: ${width / 3}px;
  border-radius: 20px;
  border: 5px solid ${colors.beige};
  margin: 10px;
`;

const OptionText = styled.Text`
  font-size: 24px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
`;

const ImageAndNameQuiz = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [quizNumber, setQuizNumber] = useState(1);
  const [characterIndex, setCharacterIndex] = useState(
    Math.floor(Math.random() * ImageSources.length)
  );
  const [isImageQuestion, setIsImageQuestion] = useState(
    Math.floor(Math.random() * 2) === 0
  );
  const [optionIndex, setOptionIndex] = useState<Record<number, number>>({});
  const [correctAnswer, setCorrectAnswer] = useState(
    Math.floor(Math.random() * 4) + 1
  );

  useEffect(() => {
    const generateUniqueOptions = () => {
      const newOptions: Record<number, number> = {};
      const usedIndices = new Set();

      const newCorrectAnswer = Math.floor(Math.random() * 4) + 1;
      setCorrectAnswer(newCorrectAnswer);

      newOptions[newCorrectAnswer] = characterIndex;
      usedIndices.add(characterIndex);

      for (let i = 1; i <= 4; i++) {
        if (i !== newCorrectAnswer) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * ImageSources.length);
          } while (usedIndices.has(randomIndex));

          newOptions[i] = randomIndex;
          usedIndices.add(randomIndex);
        }
      }

      setOptionIndex(newOptions);
    };

    generateUniqueOptions();
  }, [characterIndex]);

  const setNewQuestion = () => {
    const newCharacterIndex = Math.floor(Math.random() * ImageSources.length);
    if (newCharacterIndex !== characterIndex) {
      setCharacterIndex(newCharacterIndex);
      setIsImageQuestion(Math.floor(Math.random() * 2) === 0);
      setQuizNumber(quizNumber + 1);
    } else {
      setNewQuestion();
    }
  };

  return (
    <Container>
      <HelpModal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
      >
        <HelpModalContainer>
          <HelpModalText>
            This is a quiz where you have to guess the name of the character
            based on the image or the opposite.
          </HelpModalText>
          <HelpModalCloseButton
            onPress={() => {
              setIsModalVisible(false);
            }}
          >
            <HelpModalCloseButtonText>Close</HelpModalCloseButtonText>
          </HelpModalCloseButton>
        </HelpModalContainer>
      </HelpModal>
      <HelpButton
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <Ionicons name="help-circle-outline" size={48} color={colors.beige} />
      </HelpButton>
      <QuizNumber>{quizNumber}</QuizNumber>
      {isImageQuestion ? (
        <QuestionImage source={ImageSources[characterIndex].source} />
      ) : (
        <QuestionText>{ImageSources[characterIndex].name}</QuestionText>
      )}
      {isImageQuestion ? (
        <OptionContainer>
          {Object.entries(optionIndex).map(([key, value]) => (
            <TextOptionBox
              key={key}
              onPress={() => {
                setNewQuestion();
              }}
            >
              <OptionText>
                {key}. {ImageSources[value].name}
              </OptionText>
            </TextOptionBox>
          ))}
        </OptionContainer>
      ) : (
        <OptionContainer>
          {Object.entries(optionIndex).map(([key, value]) => (
            <ImageOptionBox
              onPress={() => {
                setNewQuestion();
              }}
            >
              <OptionImage key={key} source={ImageSources[value].source} />
            </ImageOptionBox>
          ))}
        </OptionContainer>
      )}
    </Container>
  );
};

export default ImageAndNameQuiz;
