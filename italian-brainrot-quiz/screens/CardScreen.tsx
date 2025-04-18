import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Card from '../components/Card';
import colors from '../colors';
import ImageSources from '../ImageSources';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.orange};
  padding: 20px 10px 0 10px;
`;

const Separator = styled.View`
  height: 20px;
`;

const CardScreen = () => {
  return (
    <Container>
      <FlatList
        data={ImageSources}
        renderItem={({ item }) => (
          <Card source={item.source} title={item.name} />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export default CardScreen;
