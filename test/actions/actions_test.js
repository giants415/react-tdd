import { expect } from '../test_helper';
import '../../src/actions';

describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('comment 1');
      expect(action.payload).to.equal('comment 1');
    });
  });
});
