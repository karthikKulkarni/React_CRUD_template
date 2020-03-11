import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { Post } from '../../store/Posts/types';

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

  &::first-letter {
    font-size: 200%;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

const PostBody = styled.p`
  text-align: left;
  text-indent: 2em;
  margin-top: 2em;
  background: #f3c969;
  border-radius: 5px;
  padding: 1em;

  &::first-letter {
    text-transform: capitalize;
    font-size: 200%;
    color: #8a2be2;
    font-weight: bold;
  }
`;

const DetailedPostPage = (props: Props) => {
  // @ts-ignore
  const { post }: Post = props.location.state;
  return (
    <Container className="details_container">
      <PostHeader>{post.title}</PostHeader>
      <PostBody>{post.body}</PostBody>
    </Container>
  );
};

export default DetailedPostPage;
