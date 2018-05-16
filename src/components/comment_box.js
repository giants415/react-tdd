import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }


  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    return (
      <div className='comment-box'>
        <textarea
          value={this.sate.comment}
          onChange={this.HandleChange.bind(this)}
        />
        <button>Submit Content</button>
      </div>
    );
  }
}
