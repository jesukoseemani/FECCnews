import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommentBox from '../components/CommentBox';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

const NewsDetailsContext = ({ filteredData, comments, setComments, id }) => {
  const [newid, setnewId] = useState(id);
  const [username, setUsername] = useState('koseemani');
  const [comment, setComment] = useState('');

  const commentHandler = async () => {
    const { data } = await axios.post(
      `https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news/${id}/comments`,
      {
        newsId: newid,
        name: username,
        comment: comment,
      }
    );

    setComments(...comments, data);
  };

  commentHandler();

  return (
    <StyledNewsDetailsContext>
      <StyledNewsDetailsContextTitle>
        {filteredData.title}
      </StyledNewsDetailsContextTitle>

      <StyledNewsDetailsContextAuthorDiv>
        <StyledNewsDetailsContextAuthor>
          Written by {filteredData.author ? filteredData.author : 'Anonymous'}
        </StyledNewsDetailsContextAuthor>
        <StyledNewsDetailsContextDate>
          {filteredData.createdAt &&
            format(parseISO(filteredData.createdAt), 'MM/dd/yyyy')}
        </StyledNewsDetailsContextDate>
      </StyledNewsDetailsContextAuthorDiv>

      <StyledNewsDetailsContextDescription>
        <StyledNewsDetailsContextNews>
          {filteredData.body}
        </StyledNewsDetailsContextNews>
      </StyledNewsDetailsContextDescription>

      <StyledNewsDetailsContextComment>
        {comments.map(({ id, newsId, createdAt, name, avatar, comment }) => (
          <CommentBox
            key={id}
            newsId={newsId}
            createdAt={createdAt}
            name={name}
            avatar={avatar}
            comment={comment}
          />
        ))}
      </StyledNewsDetailsContextComment>

      <StyledNewsDetailsContextInputDiv>
        <StyledNewsDetailsContextHeading>
          Leave A Comment
        </StyledNewsDetailsContextHeading>
        <StyledNewsDetailsContextInput
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter Your Comment Here..."
        />
        <button className="button" onClick={commentHandler}>
          COMMENT HERE
        </button>
      </StyledNewsDetailsContextInputDiv>
    </StyledNewsDetailsContext>
  );
};

const StyledNewsDetailsContext = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3rem;
`;

const StyledNewsDetailsContextTitle = styled.h1`
  font-size: 7rem;
  font-weight: bold;
  color: black;

  @media (max-width: 1050px) {
    font-size: 5rem;
  }
  @media (max-width: 855px) {
    font-size: 3rem;
  }
`;

const StyledNewsDetailsContextAuthorDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const StyledNewsDetailsContextAuthor = styled.h6`
  font-weight: bold;
  margin-right: 4rem;
  font-size: 2rem;
`;

const StyledNewsDetailsContextDate = styled.p`
  font-size: 1.5rem;
  color: #718096;
`;

const StyledNewsDetailsContextDescription = styled.div`
  border-top: 1px solid #e8e7e7;
`;

const StyledNewsDetailsContextNews = styled.p`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.5rem;
  line-height: 200%;
  margin: 8rem 0;

  @media (max-width: 1050px) {
    font-size: 1.5rem;
  }

  @media (max-width: 855px) {
    letter-spacing: 0rem;
  }
`;

const StyledNewsDetailsContextInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;

  .button {
    margin-top: 1rem;
    background-color: #fafafa;
    color: #3f729b;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.1s ease;
    border: 1px solid gray;
    outline: none;
    border-radius: 0.3rem;
    padding: 0.8rem 0.8rem;

    &:disabled,
    &[disabled] {
      background-color: #cccccc;
      pointer-events: none;
    }
    &:active {
      transform: translateY(0.7rem);
    }
    &:hover {
      opacity: 1;
      background-color: #3f729b;
      color: #fafafa;
    }
  }
`;

const StyledNewsDetailsContextHeading = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: black;
  display: flex;
  align-items: flex-start;
  width: 50%;
`;

const StyledNewsDetailsContextInput = styled.textarea`
  width: 50%;
  padding: 1rem 1rem;
  @media (max-width: 855px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 98%;
  }
`;

const StyledNewsDetailsContextComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0rem auto;
  width: 50%;

  @media (max-width: 855px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 98%;
  }
`;

export default NewsDetailsContext;
