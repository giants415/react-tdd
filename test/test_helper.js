import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// set up testing env to run like a browser in the command line

// initalizes and sets up "fake" browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);


// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  //produces HTML so we can test in terminal and wraps it in jquery to gain access to testing from jquery chai
  return $(ReactDOM.findDOMNode(componentInstance));
}


// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  // event name in [] creates a refernce to the event we want to simulate when it is chosen in the test spec file
  TestUtils.Simulate[eventName](this[0]);
}


//set up chai-jquery
chaiJquery(chai, chai.util, $);


export { renderComponent, expect };
