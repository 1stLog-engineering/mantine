import React from 'react';
import { MantineSize } from '@mantine/styles';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';

export interface RightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: MantineSize;
}

export function RightSection({ shouldClear, clearButtonLabel, onClear, size }: RightSectionProps) {
  return shouldClear ? (
    <CloseButton
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      size={size}
    />
  ) : (
    <></>
  );
}

RightSection.displayName = '@mantine/core/TagInput/RightSection';
