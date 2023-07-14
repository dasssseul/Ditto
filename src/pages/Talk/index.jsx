import Layout from 'layout';
import React, { useRef, useEffect } from 'react';
import './index.css';
import { CgProfile } from 'react-icons/cg';
import { BsSendCheckFill } from 'react-icons/bs';

const Talk = () => {
  const inputRef = useRef();

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
        <div className="talk-description">contents</div>
        <div className="talk-input">
          <div className="input-wrapper">
            <input
              className="input"
              placeholder="Ditto와 이야기를 나눠보세요!"
              ref={inputRef}
            />
            <BsSendCheckFill size={30} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Talk;
