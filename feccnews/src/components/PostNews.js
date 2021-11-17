import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// import { storage } from '../firebase';
// import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { fade2 } from '../styles/Animation';
import { useScroll } from '../components/useScroll';
// import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const PostNews = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [image, setImage] = useState(null);
  // const [progress, setProgress] = useState(0);
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  // const [active, setActive] = useState(false);

  const [element, controls] = useScroll();

  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
      setError1('');
    }, 4000);
    return () => clearTimeout(timer);
  }, [error, setError, error1]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (
        e.target.files[0].type === 'image/jpeg' ||
        e.target.files[0].type === 'image/jpg' ||
        e.target.files[0].type === 'image/png'
      ) {
        // setImage(e.target.files[0]);
      } else {
        e.target.value = '';
        setError1('Please,the file must be in image Format(jpeg,jpg,png)');
      }
    } else {
      // setImage(null);
    }
  };

  const handleUpload = () => {
    alert('THE DATABASE IS FULL, PLEASE TRY NEXT TIME!!!💥');

    // setActive(true);
    // let id = uuidv4();
    // const uploadTask = storage.ref(`images/${id}/${image.name}`).put(image);
    // uploadTask.on(
    //   'state_changed',
    //   (snapshot) => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setProgress(progress);
    //   },
    //   (error) => {
    //     console.log(error);
    //     alert(error.message);
    //     setError(error.message);
    //   },
    //   () => {
    //     storage
    //       .ref('images')
    //       .child(id)
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         const news = axios.post(
    //           `https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news`,
    //           {
    //             author: author,
    //             title: title,
    //             description: description,
    //           }
    //         );

    //         setProgress(0);
    //         setAuthor('');
    //         setTitle('');
    //         setImage(null);
    //         setDescription('');
    //         ref.current.value = '';
    //         setActive(false);
    //       })
    //   }
    // );
  };
  return (
    <StyledPostNews
      ref={element}
      variants={fade2}
      animate={controls}
      initial="hidden"
    >
      <StyledPostNewsh1>
        DO YOU HAVE EXCLUSIVE NEWS TO SHARE WITH FECCNEWS
      </StyledPostNewsh1>
      <StyledPostNewsP>
        We Believe in <span>True Stories</span>, <strike>Not Bad Ones</strike>
      </StyledPostNewsP>
      <Button
        style={{
          color: '#ffffff',
          background: '#FF4A33',
          padding: '2rem 3rem',
          fontSize: '1rem',
        }}
        onClick={handleOpen}
      >
        Post Here
      </Button>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledForm>
            <progress className="progress" max="100" />​
            <input
              type="text"
              className="loc"
              placeholder="Author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
            <input
              type="text"
              className="loc"
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              type="text"
              className="loc"
              placeholder="News Content"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <input
              type="file"
              ref={ref}
              className="file"
              onChange={handleChange}
            />
            <div
              style={{
                color: 'red',
                textAlign: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                fontStyle: 'italics',
              }}
            >
              {' '}
              {error1}
            </div>
            <input
              // disabled
              type="button"
              value="Upload"
              className="button"
              onClick={handleUpload}
            />
          </StyledForm>
        </Box>
      </Modal>
    </StyledPostNews>
  );
};

const StyledPostNews = styled(motion.div)`
  text-align: center;
  margin: 0rem auto 10rem auto;
  width: 80%;
`;

const StyledPostNewsh1 = styled.h1`
  font-size: 3rem;
  color: black;
`;

const StyledPostNewsP = styled.p`
  font-size: 1.5rem;
  margin: 3rem 0;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  .progress {
    width: 100%;
    padding-bottom: 1rem;
  }

  .textarea {
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem 0.5rem;
    font-size: 1.4rem;
  }
  .loc {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid gray;
    outline: none;
    border-radius: 0.3rem;
    padding: 0.8rem 0.8rem;
  }
  .file {
    width: 100%;
    margin-bottom: 1rem;
    cursor: pointer;
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
    &::before {
      content: 'Choose a Photo';
      display: inline-block;
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      border: 1px solid #3f729b;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 900;
      font-size: 10pt;
    }
    &:hover::before {
      border-color: gray;
    }
    &:active::before {
      background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
    }
  }
  .button {
    margin-bottom: 1rem;
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

export default PostNews;
