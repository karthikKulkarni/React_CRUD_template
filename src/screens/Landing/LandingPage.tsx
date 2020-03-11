import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import {
  allPostsRequest,
  addPostsRequest,
  updatePostRequest,
  deletePostRequest,
} from '../../store/Posts/action';
import { Post, AllPostsData } from '../../store/Posts/types';
import { GlobalState } from '../../store';
import { StandardApiState } from '../../store/types';
import Button from '../../components/Button';
import { ListContainer, RowItem } from '../../components/List';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export interface Props extends RouteComponentProps {
  allPostsRequest?: typeof allPostsRequest;
  rawPosts?: StandardApiState<AllPostsData>;
  addPostsRequest?: typeof addPostsRequest;
  updatePostRequest?: typeof updatePostRequest;
  deletePostRequest?: typeof deletePostRequest;
  posts: Post[];
}

export class __LandingPage extends Component<Props> {
  componentDidMount() {
    if (this.props.posts.length <= 0) {
      this.props.allPostsRequest && this.props.allPostsRequest();
    }
  }

  handleOnClick = (path: string, item?: Post) => {
    this.props.history.push(path, { post: item });
  };

  render() {
    const { posts } = this.props;

    return (
      <Container>
        <Button primary onClick={() => this.handleOnClick('/addPost')}>
          Add Post
        </Button>
        <ListContainer className="list_container">
          {posts &&
            posts.map((item: Post) => (
              <RowItem onClick={() => this.handleOnClick('/detailedPost', item)}>{item.title}</RowItem>
            ))}
        </ListContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  rawPosts: state.rawPosts,
  rawNewPost: state.rawNewPost,
  rawUpdatePost: state.rawUpdatedPost,
  rawDeletedPost: state.rawDeletedPost,
  posts: state.posts,
});

const mapDispatchToProps = {
  allPostsRequest,
  addPostsRequest,
  updatePostRequest,
  deletePostRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(__LandingPage);
