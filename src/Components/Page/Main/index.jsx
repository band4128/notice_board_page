import { Link } from "react-router-dom";
import {
    Container,
    Footer,
    Header,
    MainDateTh,
    MainNameTh,
    MainNoTh,
    MainTitleTh,
    Session,
    SubCreateDate,
    SubName,
    SubNo,
    SubTitle,
    Table
} from "./styled";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../Atoms/Button";

const MainPage = () => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5555/board/boardAll').then(res => {
            setResult(res.data);
        }).catch(err => console.log('데이터가 없습니다. (이유 : ' + err + ')'));
    }, []);
    return (
        <Container>
            <Header>
                <h1>네입버 게시판</h1>
            </Header>
            <Session>
                
                <Table>
                    <tr>
                        <MainNoTh>번호</MainNoTh>
                        <MainTitleTh>제목</MainTitleTh>
                        <MainNameTh>작성자</MainNameTh>
                        <MainDateTh>작성일</MainDateTh>
                    </tr>
                    {result && result.map((res, index) => (
                        <tr key={res.boardNo || index}>
                            <SubNo>{res.boardNo}</SubNo>
                            <SubTitle><Link to={`/select/${res.boardNo}`}>{res.boardTitle}</Link></SubTitle>
                            <SubName>{res.boardName}</SubName>
                            <SubCreateDate>{res.createDate.slice(0, 10)}</SubCreateDate>
                        </tr>
                    ))}
                </Table>
            </Session>
            <Footer>
                <Link to='/insert'>
                    <Button>
                        등록하러 가기
                    </Button>
                </Link>
            </Footer>
        </Container>
    )
}

export default MainPage;