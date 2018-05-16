import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }


  handleChange(event) {

  }

  render() {
    return (
      <div className='comment-box'>
        <textarea onChange={this.HandleChange.bind(this)} />
        <button>Submit Content</button>
      </div>
    );
  }
}
