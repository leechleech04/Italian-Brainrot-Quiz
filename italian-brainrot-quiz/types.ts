import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Card: undefined;
  Quiz: undefined;

  QuizScreen: undefined;
  ImageAndNameQuiz: undefined;
  AbilityAndMotiveQuiz: undefined;

  CardScreen: undefined;
  CardDetail: {
    source: ImageSourcePropType;
    title: string;
    ability: string[];
    motive: string[];
  };
};
