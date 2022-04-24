import { DefaultOptionType } from 'antd/lib/select';

export const app = {
  name: 'NEST STARTER',
};

export const background_list: DefaultOptionType[] = [
  {
    label: '酷谐黑',
    value: 'dark',
  },
  {
    label: '明亮白',
    value: 'light',
  },
];

export type ITheme = 'dark' | 'light'

