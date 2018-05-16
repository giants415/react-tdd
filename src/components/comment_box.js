import React, { Component } from 'react';

export default class CommentBox extends Component {



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
