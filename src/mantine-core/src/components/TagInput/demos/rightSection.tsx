import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { TagInput } from '../TagInput';

const code = `
<TagInput
  label="Your favorite frameworks/libraries"
  placeholder="Pick all that you like"
  defaultValue={['react', 'next']}
  rightSection={() => <ChevronDownIcon />}
  styles={{ rightSection: { pointerEvents: 'none' } }}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        defaultValue={['react', 'next']}
        rightSection={() => <ChevronDownIcon />}
        styles={{ rightSection: { pointerEvents: 'none' } }}
      />
    </div>
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
