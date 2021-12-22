import React from 'react';
import { TagInput } from '../TagInput';

const code = `
<TagInput
  label="Your favorite frameworks/libraries"
  placeholder="Pick all that you like"
  defaultValue={['react', 'next']}
  maxTags={5}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        defaultValue={['react', 'next']}
        maxTags={5}
      />
    </div>
  );
}

export const maxTags: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
