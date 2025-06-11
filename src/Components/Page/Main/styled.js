import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
alignItems: center;
`;

export const Header = styled.div`
width: 100%;
height: 100px;
background-color: rgb(214, 230, 245);
text-align: center;
line-height: 100px;
`;

export const Table = styled.table`
margin: 30px auto;
text-align: center;
`;

export const Session = styled.div`
width: 800px;
height: 100%;
margin: 10px auto;
`;

export const BoardTitle = styled.div`
width: 100%;
height: 50px;
line-height: 50px;
border-bottom: 1px solid black;
`;

export const BoardName = styled.div`
width: 100%;
height: 50px;
line-height: 50px;
font-size: 18px;
border-bottom: 1px solid black;
display: flex;
`;

export const DateText = styled.h6`
width: 90px;
color: gray;
text-align: end;
`;

export const BoardText = styled.div`
width: 100%;
height: 100%;
padding-top: 10px;
`;

export const Footer = styled.div`
width: 100%;
height: 70px;
background-color: rgb(214, 230, 245);
position: fixed;
bottom: 0;
text-align: center;
`;

export const Input = styled.input`
height: 20px;
width: 150px;
`;

export const Textarea = styled.textarea`
width: 200px;
height: 200px;
resize: none;
`;
