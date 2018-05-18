import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  return (
    <ul className="comment-list"></ul>
  );
}

function mapStateToProps(state) {
  return { comments : state.comments }
}

export default connect(mapStateToProps)(CommentList);
