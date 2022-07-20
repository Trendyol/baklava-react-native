import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  compose,
  flexbox,
  color,
  size,
  space,
  borders,
  borderRadius,
} from 'styled-system';

const Box = styled(View)(
  compose(flexbox, color, size, space, borders, borderRadius),
);

Box.defaultProps = {
  testID: 'box',
};

export default Box;
