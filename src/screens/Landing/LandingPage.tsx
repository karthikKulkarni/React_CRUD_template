import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  allPostsRequest,
  addPostsRequest,
  updatePostRequest,
  deletePostRequest,
} from '../../store/Posts/action';
import { Post, UpdatePostInput, DeletePostInput, AllPostsData } from '../../store/Posts/types';
import { StandardApiState, GlobalState } from '../../store';
import { Button } from '../../components/Button';
import { ListContainer, RowItem } from '../../components/List';
import { Link, Redirect } from 'react-router-dom';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export interface Props {
  allPostsRequest?: typeof allPostsRequest;
  rawPosts?: StandardApiState<AllPostsData>;
  addPostsRequest?: typeof addPostsRequest;
  updatePostRequest?: typeof updatePostRequest;
  deletePostRequest?: typeof deletePostRequest;

  posts: Post[];
}

export class __LandingPage extends Component<Props> {
  state = {
    redirect: '/',
  };

  componentDidMount() {
    this.props.allPostsRequest && this.props.allPostsRequest();
  }

  createPost = () => {
    const newPost: Post = { title: 'foo', body: 'bar', userId: 1 };
    this.props.addPostsRequest && this.props.addPostsRequest(newPost);
  };

  updatePost = () => {
    const updatePost: UpdatePostInput = { postBody: { title: 'Ufoo', body: 'Ubar', userId: 1 }, postId: 5 };
    this.props.updatePostRequest && this.props.updatePostRequest(updatePost);
  };

  deletePost = (item: Post) => {
    const deletePost: DeletePostInput = { postId: item.id ? item.id : 0 };
    this.props.deletePostRequest && this.props.deletePostRequest(deletePost);
  };

  handleOnClick = () => {
    // some action...
    // then redirect
    this.setState({ redirect: '/detailedPost' });
  };

  render() {
    const { posts } = this.props;

    if (this.state.redirect !== '/') {
      return <Redirect push to={this.state.redirect} />;
    }

    return (
      <Container>
        <Button>Normal Button</Button>
        <Button primary={true}>Primary Button</Button>
        <ListContainer className="list_container">
          {posts && posts.map(item => <RowItem onClick={() => this.handleOnClick()}>{item.title}</RowItem>)}
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
