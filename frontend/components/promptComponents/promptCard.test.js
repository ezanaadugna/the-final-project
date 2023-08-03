import React from 'react';
import { render } from '@testing-library/react-native';
import PromptCardComponent from './PromptCard'; 

describe('PromptCardComponent', () => {
  it('renders the component correctly', () => {
    const title = 'Test Title';
    const generatedPrompt = 'This is a test prompt.';
    const { getByText } = render(
      <PromptCardComponent title={title} generatedPrompt={generatedPrompt} />
    );

    const titleElement = getByText(title);
    const promptElement = getByText(generatedPrompt);

    expect(titleElement).toBeDefined();
    expect(promptElement).toBeDefined();
  });
});