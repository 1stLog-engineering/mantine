import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { Input } from '../Input/Input';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { TagInput } from './TagInput';

const defaultProps = {
  data: ['React', 'Angular', 'Svelte', 'Vue'],
  defaultValue: ['React', 'Angular'],
};

describe('@mantine/core/TagInput', () => {
  itSupportsClassName(TagInput, defaultProps);
  itSupportsStyle(TagInput, defaultProps);
  itSupportsMargins(TagInput, defaultProps);
  itSupportsRef(TagInput, defaultProps, HTMLInputElement);

  it('passes required, invalid, icon and radius props to Input component', () => {
    const element = shallow(
      <TagInput required error="test-error" icon="$" radius="sm" />
    );

    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <TagInput
        id="test-id"
        required
        label="test-label"
        error="test-error"
        description="test-description"
      />
    );

    expect(element.find(InputWrapper).prop('id')).toBe('test-id');
    expect(element.find(InputWrapper).prop('required')).toBe(true);
    expect(element.find(InputWrapper).prop('label')).toBe('test-label');
    expect(element.find(InputWrapper).prop('error')).toBe('test-error');
    expect(element.find(InputWrapper).prop('description')).toBe('test-description');
  });

  it('renders hidden input with current input value', () => {
    const element = shallow(
      <TagInput {...defaultProps} name="custom-select" value={['React', 'Angular']} />
    );
    expect(element.render().find('input[name="custom-select"]').attr('value')).toBe(
      'React,Angular'
    );
  });

  it('has correct displayName', () => {
    expect(TagInput.displayName).toEqual('@mantine/core/TagInput');
  });
});
