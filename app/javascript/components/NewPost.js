import React, { Component } from 'react';
import axios from 'axios';
import { passCsrfToken } from '../util/helpers';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    passCsrfToken(document, axios)
  }

  handleSubmit = (e) => {
    const { title, body } = this.state;
    const formValues = { title, body };
    e.preventDefault();

    axios
      .post('/api/posts', formValues)
      .then(response => console.log(response));
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit}>
            <input
              name="title"
              placeholder="title"
              type="text"
              onChange={this.handleChange}
            />
            <input
              name="body"
              placeholder="body"
              type="text"
              onChange={this.handleChange}
            />
          <button>Create Post</button>
        </form>
      </div>
    )
  }
}

export default NewPost;
