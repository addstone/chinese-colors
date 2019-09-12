import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  position: fixed;
  top: 4rem;
  right: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  .icon {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

const IconInfo = ({ showPreview }) => {
  return (
    <Wrapper onClick={showPreview}>
      <svg
        t="1568267241706"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1970"
        width="48"
        height="48"
      >
        <path
          d="M853.333333 0h-682.666666C75.093333 0 0 75.093333 0 170.666667v682.666666C0 948.906667 75.093333 1024 170.666667 1024h682.666666c95.573333 0 170.666667-75.093333 170.666667-170.666667v-682.666666C1024 75.093333 948.906667 0 853.333333 0zM955.733333 853.333333c0 54.613333-47.786667 102.4-102.4 102.4h-682.666666c-54.613333 0-102.4-47.786667-102.4-102.4v-682.666666C68.266667 116.053333 116.053333 68.266667 170.666667 68.266667h682.666666c54.613333 0 102.4 47.786667 102.4 102.4v682.666666z"
          p-id="1971"
          fill="#ffffff"
        ></path>
        <path
          d="M853.333333 136.533333h-273.066666c-20.48 0-34.133333 13.653333-34.133334 34.133334s13.653333 34.133333 34.133334 34.133333H819.2v238.933333c0 20.48 13.653333 34.133333 34.133333 34.133334s34.133333-13.653333 34.133334-34.133334v-273.066666c0-20.48-13.653333-34.133333-34.133334-34.133334zM443.733333 819.2H204.8V580.266667c0-20.48-13.653333-34.133333-34.133333-34.133334s-34.133333 13.653333-34.133334 34.133334v273.066666c0 20.48 13.653333 34.133333 34.133334 34.133334h273.066666c20.48 0 34.133333-13.653333 34.133334-34.133334s-13.653333-34.133333-34.133334-34.133333z"
          p-id="1972"
          fill="#eee"
        ></path>
      </svg>
    </Wrapper>
  );
};

export default IconInfo;
