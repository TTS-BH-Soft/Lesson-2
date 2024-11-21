import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Input = styled.input`
  height: 61.58px;
  font-size: 1rem;
  font-weight: 300;
  border: 1px solid #d9ddfe;

  border-radius: 15px;
  padding-left: 1.4rem;
  padding-bottom: 2px;
  margin-bottom: 0.37rem;
  line-height: 24px;
  width: 520px;

  &:focus {
    border-color: #ff4da6;
  }

  &::placeholder {
    color: #c5c5c5;
    line-height: 24px;
    letter-spacing: 1.7px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  border: 1px solid #d9ddfe;
  border-radius: 15px;
  padding-left: 1.4rem;
  padding-top: 1.6rem;
  height: 240px;
  resize: none;
  line-height: 24px;

  &:focus {
    border-color: #ff4da6;
  }

  &::placeholder {
    color: #c5c5c5;
    line-height: 24px;
    letter-spacing: 1.7px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const Button = styled.button`
  margin: 1.4rem 0;
  line-height: 23px;
  letter-spacing: 1.7px;
  padding: 1.1rem 2rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }
`;
