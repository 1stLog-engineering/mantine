import React from 'react';
import { MantineSize } from '@mantine/styles';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';

export interface DefaultRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: MantineSize;
}

export function DefaultRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
}: DefaultRightSectionProps) {
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

DefaultRightSection.displayName = '@mantine/core/TagInput/DefaultRightSection';
