import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class'), () => {
    expect(component).to.have.class('comment-box');
  }

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });


  describe('entering some text', () => {
    beforeEach(() => {
      // beforeEach it block, fn triggers and targets the text area, simulates a change event which passes in the text "new comment"
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text that is entered in the text area', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {

    });
  });
});
