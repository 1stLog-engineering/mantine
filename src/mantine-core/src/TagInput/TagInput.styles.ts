import { createStyles, getSize, MantineSize, rem } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';
import { sizes as DEFAULT_VALUE_SIZES } from './DefaultValue/DefaultValue.styles';

interface TagInputStyles {
  size: MantineSize;
  invalid: boolean;
  inputFieldPosition: InputFieldPosition;
}

export type InputFieldPosition = 'inside' | 'top' | 'bottom';

export default createStyles((theme, { size, invalid, inputFieldPosition }: TagInputStyles) => ({
  wrapper: {
    position: 'relative',
  },

  values: {
    minHeight: `calc(${getSize({ size, sizes: INPUT_SIZES })} - ${rem(2)})`,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: `calc(-${theme.spacing.xs} / 2)`,
    boxSizing: 'border-box',
    width: '100%',

    '&[data-clearable]': {
      marginRight: getSize({ size, sizes: INPUT_SIZES }),
    },
  },

  value: {
    margin: `calc(${theme.spacing.xs} / 2 - ${rem(2)}) calc(${theme.spacing.xs} / 2)`,
  },

  tagInput: {
    ...theme.fn.fontStyles(),
    flex: 1,
    width: rem(60),
    minWidth: inputFieldPosition !== 'inside' ? '90%' : 'auto',
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: getSize({ size, sizes: theme.fontSizes }),
    padding: 0,
    margin: `calc(${theme.spacing.xs}px / 2)`,
    appearance: 'none',
    color: 'inherit',
    lineHeight: `calc(${getSize({ size, sizes: INPUT_SIZES })} - ${rem(2)})`,
    maxHeight: getSize({ size, sizes: DEFAULT_VALUE_SIZES }),

    '&::placeholder': {
      color: invalid
        ? theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  tagInputEmpty: {
    width: '100%',
  },

  tagInputPointer: {
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  input: {
    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },
}));
