import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import * as Yup from 'yup';
import { addPostsRequest } from '../../store/Posts/action';
import { Post } from '../../store/Posts/types';

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

const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'};
`;

export interface Props extends RouteComponentProps {
  addPostsRequest?: typeof addPostsRequest;
}

export class __AddPostPage extends Component<Props> {
  state = { title: '', body: '' };

  createPost = () => {
    const newPost: Post = { title: this.state.title, body: this.state.body, userId: 234324 };
    this.props.addPostsRequest && this.props.addPostsRequest(newPost);
  };

  handleOnClick = (path: string, item?: Post) => {
    this.props.history.push(path, { post: item });
  };

  handleSubmit = () => {
    this.createPost();
    this.handleOnClick('/');
  };

  render() {
    return (
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(2)
            .max(6)
            .required('Title is mandatory'),
          description: Yup.string().required('Description is required'),
        })}
        onSubmit={values => {
          this.setState({
            title: values.title,
            body: values.description,
          });

          this.handleSubmit();
        }}
        render={({ touched, errors, values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Container onSubmit={handleSubmit}>
            <h1>Adding new Post</h1>
            <TitleLabel>
              Title
              <input
                type="text"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                name="title"
              />
            </TitleLabel>
            {touched.title && errors.title && <Text color="red">{errors.title}</Text>}
            <TitleLabel>
              Description
              <input
                type="text"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                name="description"
              />
            </TitleLabel>
            {touched.description && errors.description && <Text color="red">{errors.description}</Text>}
            <button type="submit" disabled={isSubmitting}>
              Add Post
            </button>
          </Container>
        )}
      />
    );
  }
}

const mapDispatchToProps = {
  addPostsRequest,
};

export default connect(null, mapDispatchToProps)(__AddPostPage);
