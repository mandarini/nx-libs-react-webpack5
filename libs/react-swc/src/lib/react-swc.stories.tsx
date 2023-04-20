import type { Meta } from '@storybook/react';
import { ReactSwc } from './react-swc';

const Story: Meta<typeof ReactSwc> = {
  component: ReactSwc,
  title: 'ReactSwc',
};
export default Story;

export const Primary = {
  args: {},
};
