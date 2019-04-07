import styled from 'styled-components';

export const Footer = styled.footer`
  /* Position */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  /* Flex */
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  /* Styles */
  z-index: 10;
  /* background-color: rgba(11, 10, 21, 1); */
  /* background: #3e3c62; */
  /* background-image: linear-gradient(
    109.6deg,
    rgba(84, 13, 110, 1) 11.2%,
    rgba(238, 66, 102, 1) 100.2%
  ); */
  background-color: rgba(11, 10, 21, 1);
  /* background-image: linear-gradient(
    to right top,
    #0b0a15,
    #181827,
    #24243a,
    #31304d,
    #3e3c62
  ); */

  background-image: linear-gradient(
    to right top,
    #0b0a15,
    #151421,
    #1c1c2d,
    #24233b,
    #2c2b48
  );
  /* background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%); */

  /* background-color: rgba(180, 172, 183, 0.9); */
  /* background-color: rgba(240, 239, 249, 0.9); */
  /* background-color: #12146e; */

  height: 4rem;
`;
