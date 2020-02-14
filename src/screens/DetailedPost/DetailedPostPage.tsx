import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Post } from '../../store/Posts/types';
import styled from 'styled-components';

export interface Props extends RouteComponentProps<any>, React.Props<any> {}

const Container = styled.div`
  height: 100vh;
  padding: 1rem 1rem;
  background: #3e4e50;
`;

const PostHeader = styled.h2`
  text-align: left;
  padding: 1rem;
  background: #f2aa7e;
  border-radius: 5px;
`;

const PostBody = styled.p`
  text-align: left;
  text-indent: 2em;
  margin-top: 2em;
  background: #f3c969;
  border-radius: 5px;
`;

class DetailedPostPage extends Component<Props> {
  render() {
    // @ts-ignore
    const { post }: Post = this.props.location.state;
    return (
      <Container className="details_container">
        <PostHeader>{post.title}</PostHeader>
        <PostBody>{post.body}</PostBody>
      </Container>
    );
  }
}

export default DetailedPostPage;
