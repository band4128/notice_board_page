import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
align-items: center;
`;

export const Header = styled.div`
width: 100%;
height: 100px;
background-color: rgb(214, 230, 245);
text-align: center;
line-height: 100px;
`;

export const MainTable = styled.table`
width: 1300px;
margin: 50px auto;
text-align: center;
border-collapse: collapse;
`;

export const MainSession = styled.div`
width: 100%;
height: 100%;
text-align: end;
padding-bottom: 70px;
`;

export const MainBoardTitle = styled.div`
width: 100%;
height: 50px;
line-height: 50px;
border-bottom: 1px solid black;
`;

export const MainBoardName = styled.div`
width: 100%;
height: 50px;
line-height: 50px;
font-size: 18px;
border-bottom: 1px solid black;
display: flex;
`;

export const MainDateText = styled.h6`
width: 90px;
color: gray;
text-align: end;
`;

export const MainBoardText = styled.div`
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

export const MainInput = styled.input`
height: 20px;
width: 80%;
margin-left: 10px;
`;

export const MainTextarea = styled.textarea`
width: 200px;
height: 200px;
margin-top: 5px;
resize: none;
`;

export const MainTd = styled.td`
text-align: left;
padding-left: 10px; 
border-bottom: 1px solid black;
font-size: 25px;
padding: 3px;
`;

export const MainNoTh = styled.th`
width: 10%;
height: 40px;
border-bottom: 1px solid black;
border-top: 1px solid black;
font-size: 25px;
padding: 3px;
background-color : #e9f7ef;
color: black;
`;

export const MainNameTh = styled.th`
width: 15%;
height: 40px;
border-bottom: 1px solid black;
border-top: 1px solid black;
font-size: 25px;
padding: 3px;
background-color : #e9f7ef;
color: black;
`;

export const MainTitleTh = styled.th`
width: 40%;
height: 40px;
border-bottom: 1px solid black;
border-top: 1px solid black;
text-align: left;
font-size: 25px;
padding: 3px;
background-color : #e9f7ef;
color: black;
`;

export const MainDateTh = styled.th`
width: 15%;
height: 40px;
border-bottom: 1px solid black;
border-top: 1px solid black;
font-size: 25px;
padding: 3px;
background-color : #e9f7ef;
color: black;
`;

export const MainBodyNo = styled.td`
height : 30px;
font-size: 19px;
border-bottom: 1px solid black;
padding: 3px;
background-color: #f4f9f7;
`;

export const MainBodyName = styled.td`
height : 30px;
font-size: 19px;
border-bottom: 1px solid black;
padding: 3px;
background-color: #f4f9f7;
`;

export const MainBodyTitle = styled.td`
height : 30px;
font-size: 19px;
text-align: left;
padding: 3px;
background-color: #f4f9f7;
border-bottom: 1px solid black;
`;

export const MainBodyCreateDate = styled.td`
height : 30px;
font-size: 15px;
border-bottom: 1px solid black;
padding: 3px;
background-color: #f4f9f7;
`;