import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';
import { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { Provider } from 'redux';
import reducers from '../src/reducers';

// set up testing env to run like a browser in the command line

// initalizes and sets up "fake" browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);


// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers)}>
      <ComponentClass />
    </Provider>
  );

  //produces HTML so we can test in terminal and wraps it in jquery to gain access to testing from jquery chai
  return $(ReactDOM.findDOMNode(componentInstance));
}


// build helper for simulating events


//set up chai-jquery


export { renderComponent, expect };
