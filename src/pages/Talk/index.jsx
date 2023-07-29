import Layout from 'layout';
import React, { useRef, useEffect, useState } from 'react';
import './index.css';
import { CgProfile } from 'react-icons/cg';
import { BsSendCheckFill } from 'react-icons/bs';
import axios from 'axios';

const Talk = () => {
  const inputRef = useRef();

  const [text, setText] = useState('');

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmitChat = async (e) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: '안녕',
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      console.log(response.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      alert('Error occurred');
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Layout>
      <div className="talk-contents">
        <div className="talk-header">
          <CgProfile size={35} />
          <div className="user-info">
            <span>김아무개</span>
            <span className="user-description">
              대화명 블라블라 만나서 반가워요!
            </span>
          </div>
        </div>
        <div className="talk-description">
          <div className="talk-contents-wrapper">contents</div>
        </div>
        <div className="talk-input">
          <div className="input-wrapper">
            <input
              className="input"
              placeholder="Ditto와 이야기를 나눠보세요!"
              ref={inputRef}
              onChange={handleChangeText}
              value={text}
            />
            <BsSendCheckFill size={30} onClick={handleSubmitChat} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Talk;
