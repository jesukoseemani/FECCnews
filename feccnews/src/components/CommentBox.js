import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { format, parseISO } from 'date-fns';

const CommentBox = ({ avatar, createdAt, name, comment }) => {
  return (
    <StyledCommentBox>
      <StyledCommentBoxInfo>
        <StyledCommentBoxInfoLeft>
          <StyledCommentBoxInfoLeftTop>
            <StyledCommentBoxInfoLeftTopImageDiv>
              <StyledCommentBoxInfoLeftTopImage src={avatar} alt="" />
            </StyledCommentBoxInfoLeftTopImageDiv>

            <StyledCommentBoxInfoLeftTopUserDiv>
              <StyledCommentBoxInfoLeftTopUser>
                {name} <span>Says:</span>
              </StyledCommentBoxInfoLeftTopUser>
            </StyledCommentBoxInfoLeftTopUserDiv>
          </StyledCommentBoxInfoLeftTop>
          <StyledCommentBoxInfoLeftBottom>
            {format(parseISO(createdAt), 'MM/dd/yyyy')}
          </StyledCommentBoxInfoLeftBottom>
        </StyledCommentBoxInfoLeft>

        <StyledCommentBoxInfoRight>
          <StyledCommentBoxInfoRightP>Reply</StyledCommentBoxInfoRightP>
          <FontAwesomeIcon
            className="icon icon-arrow"
            icon={faReply}
            size="2x"
          />
        </StyledCommentBoxInfoRight>
      </StyledCommentBoxInfo>

      <StyledCommentBoxBody>{comment}</StyledCommentBoxBody>
    </StyledCommentBox>
  );
};

const StyledCommentBox = styled.div`
  padding: 2rem;
  width: 100%;
  margin-bottom: 0.5rem;
  box-shadow: 0px 4px 4px rgba(192, 189, 189, 0.25);
  border-radius: 0.5rem;
`;

const StyledCommentBoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCommentBoxInfoLeft = styled.div``;

const StyledCommentBoxInfoLeftTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCommentBoxInfoLeftTopImageDiv = styled.div`
  margin-right: 1.5rem;
`;

const StyledCommentBoxInfoLeftTopImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
`;

const StyledCommentBoxInfoLeftTopUserDiv = styled.div``;

const StyledCommentBoxInfoLeftTopUser = styled.p`
  font-size: 1.4rem;
  color: green;

  span {
    color: black;
  }
`;

const StyledCommentBoxInfoLeftBottom = styled.p`
  font-size: 1.3rem;
  opacity: 0.5;
`;

const StyledCommentBoxInfoRight = styled.div`
  display: flex;
  align-items: center;
  margin-top: -2rem;

  .icon {
    color: black;
  }
`;

const StyledCommentBoxInfoRightP = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const StyledCommentBoxBody = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export default CommentBox;
