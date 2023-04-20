import type { Meta } from '@storybook/react';
import { ReactBabel } from './react-babel';

const Story: Meta<typeof ReactBabel> = {
  component: ReactBabel,
  title: 'ReactBabel',
};
export default Story;

export const Primary = {
  args: {},
};
