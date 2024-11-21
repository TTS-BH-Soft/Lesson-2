import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 400px; /* Đảm bảo phần này đủ chiều cao */
  background: linear-gradient(135deg, #d0c7f1, #f2e3f4); /* Gradient cho nền */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 50px; /* Khoảng cách nội dung từ biên */
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #4e4e9e; /* Màu cho tiêu đề */
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #cacaca; /* Màu cho phần phụ đề */
`;

export const Button = styled.button`
  background-color: #f25f85; /* Màu nền nút */
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #d94f75; /* Màu nền khi hover */
  }
`;
