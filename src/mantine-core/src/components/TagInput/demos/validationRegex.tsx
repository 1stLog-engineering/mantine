import React from 'react';
import { TagInput } from '../TagInput';

const code = `
<TagInput
  label="Your favorite frameworks/libraries"
  placeholder="Pick all that you like"
  defaultValue={['react', 'next']}
  validationRegex={/test.*/}
  onValidationReject={() => {}}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        defaultValue={['test', 'test2']}
        validationRegex={/test.*/}
        onValidationReject={() => {}}
      />
    </div>
  );
}

export const validationRegex: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
