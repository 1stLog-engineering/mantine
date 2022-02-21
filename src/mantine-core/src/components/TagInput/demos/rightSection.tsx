import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { TagInput } from '../TagInput';

const code = `
<TagInput
  label="Technologies that you're interested in"
  placeholder="Add as many as you like"
  defaultValue={['react', 'next']}
  rightSection={() => <ChevronDownIcon />}
  styles={{ rightSection: { pointerEvents: 'none' } }}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add as many as you like"
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
