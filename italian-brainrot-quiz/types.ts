import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Card: undefined;
  CardDetail: {
    source: ImageSourcePropType;
    title: string;
    ability: string[];
    motive: string[];
  };
};
