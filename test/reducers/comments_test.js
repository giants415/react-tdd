import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/index';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer()).to.be.instanceof(Array);
    //alternative way to "deep check" that array result is empty
    expect(commentReducer()).to.eql([]);
  });

  it ('handles action of type SAVE_COMMENT', () => {

  });
});
