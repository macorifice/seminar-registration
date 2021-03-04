/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Main from './components/Main';

configure({ adapter: new Adapter() });

let container;

beforeEach(() => {
  container = document.createElement('main');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('render without crashing', () => {
  it('render main app', () => {
    shallow(<App />);
  });
});

describe('render main component correctly', () => {
  it('render first step', () => {
    act(() => {
      ReactDOM.render(<Main />, container);
    });

    const title = container.querySelector('h1');
    expect(title.textContent).toBe('Seminar');

    const paragraph = container.querySelector('p');
    expect(paragraph.textContent).toBe('How many people will be attending ?');
  });
});
