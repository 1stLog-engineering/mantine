import React, { useState } from 'react';
import { TagInput } from '../TagInput';

const code = `
  <TagInput
    label="Your favorite frameworks/libraries"
    placeholder="Pick all that you like"
    clearButtonLabel="Clear selection"
    clearable
    maxTags={3}
    value={value}
    onChange={(item) => setValue(item)}
  />
`;

function Demo() {
  const [value, setValue] = useState(['React']);
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        clearButtonLabel="Clear selection"
        clearable
        maxTags={3}
        value={value}
        onChange={(item) => setValue(item)}
      />
    </div>
  );
}

export const controlable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
