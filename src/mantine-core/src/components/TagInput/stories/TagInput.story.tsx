import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { RtlProvider, SubmitForm } from '@mantine/ds/src';
import { Group } from '../../Group/Group';
import { TextInput } from '../../TextInput/TextInput';
import { TagInput } from '../TagInput';

function Controlled() {
  const [value, setValue] = useState([]);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagInput
        label="Tag Input"
        value={value}
        onChange={setValue}
        placeholder="Input tag"

      />
      <button type="button" onClick={() => setValue(['react', 'ng'])}>
        Set value
      </button>
    </div>
  );
}

const sizes = MANTINE_SIZES.map((size) => (
  <Group grow key={size} style={{ marginTop: 30 }} direction="column">
    <TagInput
      size={size}
      variant="unstyled"
      label="Tag Input"
      defaultValue={['react', 'ng']}
      placeholder="Input Tag"

    />
    <TextInput label="Text input" placeholder="Text input" size={size} />
  </Group>
));

const variants = (['default', 'filled', 'unstyled'] as const).map((variant) => (
  <Group grow key={variant} style={{ marginTop: 30 }} direction="column">
    <TagInput
      variant={variant}
      label="Tag Input"
      placeholder="Input Tag"
    />
    <TextInput label="Text input" placeholder="Text input" variant={variant} />
  </Group>
));

storiesOf('@mantine/core/TagInput/stories', module)
  .add('Alignment', () => (
    <>
      <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
        <TagInput
          label="Tag Input"
          defaultValue={['react', 'ng']}
          placeholder="Input tag"
        />
        <TextInput label="Text input" placeholder="Input tag" />
      </Group>
      <Group style={{ padding: 40, paddingTop: 0 }} grow align="flex-start" mt="md">
        <TextInput label="Text input" placeholder="Input tag" />
        <TagInput
          label="Tag Input with separator and disabled items"
          defaultValue={['react', 'ng']}
          placeholder="Input tag"
        />
      </Group>
    </>
  ))
  .add('Overflow value and items', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagInput label="Tag Input" placeholder="Input tag" />
    </div>
  ))
  .add('z-index', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagInput label="Tag Input" placeholder="Input tag" />
    </div>
  ))
  .add('Grouped and disabled data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagInput
        label="Tag Input"
        placeholder="Input tag"

      />
    </div>
  ))
  .add('Controlled', () => <Controlled />)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Variants', () => <div style={{ padding: 40 }}>{variants}</div>)
  .add('Max Selected Values', () => (
    <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
      <TagInput
        label=" with Max Selectable Values"
        defaultValue={['react', 'ng']}
        placeholder="Input tag"
        maxTags={5}
      />
    </Group>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <TagInput
        label="Submit with enter"
        defaultValue={['react', 'ng']}
        placeholder="Input tag"

      />
    </SubmitForm>
  ))
  .add('RTL', () => (
    <RtlProvider>
      <TagInput
        label="Tag Input"
        defaultValue={['react', 'ng']}
        placeholder="Input tag"

      />
    </RtlProvider>
  ));
