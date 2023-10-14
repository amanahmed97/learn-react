import React from 'react';
import { render,fireEvent, cleanup, getByTestId, wait } from '@testing-library/react';
import App from './App';
import PageHeading from './App';


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

afterEach(cleanup);

describe('Testing our App component', () => {

  test('Test if app component renders', () => {

      const {getByText} =render(<App />);
      const controlElement = getByText('Choose Image');
      expect(controlElement).toBeInTheDocument();

  });
  
  
  test('Test function PageHeading', () => {
    const {getByText} = render(<App />);
    const controlElement = getByText('PageHeading()');
    expect(controlElement).toBeInTheDocument();  
  })
  test('Test if app component renders', () => {

    const {getByRole} =render(<App />);
    const controlElement = getByRole('button');
    fireEvent.click(controlElement);

});

test('Test if app component work', () => {

  const {getByText} =render(<App />);
  const controlElement = getByText('Choose Instance');
  expect(controlElement).toBeInTheDocument();

});

test('Test if app component work', () => {

  const {getByText} =render(<App />);
  const controlElement = getByText("cost-card");
  expect(controlElement).toBeInTheDocument();

});

});

