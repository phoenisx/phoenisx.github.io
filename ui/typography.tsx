import { theme } from '@utils/theme';
import styled, { ThemeProps } from 'styled-components';

type FontTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'title' | 'subTitle' | 'body';
type FontWeights = 'regular' | 'medium' | 'bold';

export interface ITypography extends ThemeProps<typeof theme> {
  type: FontTypes;
  weight?: FontWeights;
}

const mapToFontFamily = (props: ITypography) => {
  switch (props.type) {
    case 'h1':
    case 'h2':
    case 'title':
    case 'subTitle':
      return `${props.theme.typography.font.special}, serif`;
    default:
      return `${props.theme.typography.font.default}, sans-serif`;
  }
};

const mapToFontWeights = (props: ITypography) => {
  switch (props.weight) {
    case 'medium':
      return 600;
    case 'bold':
      return 900;
    default:
      return 400;
  }
};

export const Typography = styled.span<ITypography>`
  font-family: ${props => mapToFontFamily(props)};
  font-size: ${props => props.theme.typography.size[props.type]}px;
  font-weight: ${props => mapToFontWeights(props)};
`;