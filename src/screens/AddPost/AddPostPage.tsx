import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPostsRequest } from '../../store/Posts/action';
import { Post } from '../../store/Posts/types';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

const Container = styled.form`
  height: 100vh;
  padding: 1rem 1rem;
  background: #8e3b46;
`;

const TitleLabel = styled.label`
  font-size: 2em;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export interface Props extends RouteComponentProps {
  addPostsRequest?: typeof addPostsRequest;
}

export class __AddPostPage extends Component<Props> {
  state = { title: '', body: '' };

  constructor(props: Props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createPost = () => {
    const newPost: Post = { title: this.state.title, body: this.state.body, userId: 234324 };
    this.props.addPostsRequest && this.props.addPostsRequest(newPost);
  };

  handleTitleChange(event: any) {
    this.setState({
      title: event.target.value,
    });
  }

  handleBodyChange(event: any) {
    this.setState({
      body: event.target.value,
    });
  }

  handleOnClick = (path: string, item?: Post) => {
    this.props.history.push(path, { post: item });
  };

  handleSubmit(event: any) {
    this.createPost();
    this.handleOnClick('/');
    event.preventDefault();
  }

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <TitleLabel>
          Title
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </TitleLabel>

        <TitleLabel>
          Description
          <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
        </TitleLabel>

        <input type="submit" value="Add Post" />
      </Container>
    );
  }
}

const mapDispatchToProps = {
  addPostsRequest,
};

export default connect(null, mapDispatchToProps)(__AddPostPage);
