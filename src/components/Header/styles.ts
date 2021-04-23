import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: var(--shape);
  position: fixed;

  z-index: 10;
  transition: 0.4s;

  div {
    width: 100%;
    max-width: 700px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* background: red; */

    a {
      /* padding: 30px 0; */
      height: 100%;
      text-decoration: none;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;

      transition: border 0.3s;

      p {
        font-size: 18px;
        font-weight: 600;
        margin-top: 28px;
        color: var(--text-dark);

        transition: 0.3s;
        cursor: pointer;
      }

      span {
        width: 0%;
        height: 3px;
        background: #23395B;
        
        transition: 0.3s;
      }  

      &:hover span {
        width: 120%;
      }

      &:hover p {
        color: var(--green);
      }
    }
  }

  @media (max-width: 800px) {
    height: 70px;

    div {
      justify-content: space-evenly;

      a {
        p {
          font-size: 14px;
        }
      }
    }
  }
`;
