import React from 'react';
import { TagInput } from '../TagInput';

const code = `
      <TagInput
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        defaultValue={['react', 'next']}
        clearButtonLabel="Clear selection"
        clearable
        maxTags={3}
      />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        defaultValue={['react', 'next']}
        clearButtonLabel="Clear selection"
        clearable
        maxTags={3}
      />
    </div>
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
