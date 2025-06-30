import { Link } from "react-router-dom";
import {
    Container,
    Footer,
    Header,
    MainBodyCreateDate,
    MainBodyName,
    MainBodyNo,
    MainBodyTitle,
    MainDateTh,
    MainNameTh,
    MainNoTh,
    MainSession,
    MainTable,
    MainTitleTh
} from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../Atoms/Button";

const MainPage = () => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5555/board/boardAll').then(res => {
            setResult(res.data);
        }).catch(err => alert('데이터를 찾을 수 없습니다.'));
    }, []);
    return (
        <Container>
            <Header>
                <h1>네입버 게시판</h1>
            </Header>
            <MainSession>
                <MainTable>
                    <tr>
                        <MainNoTh>번호</MainNoTh>
                        <MainTitleTh>제목</MainTitleTh>
                        <MainNameTh>작성자</MainNameTh>
                        <MainDateTh>작성일</MainDateTh>
                        <MainDateTh>수정된 날</MainDateTh>
                    </tr>
                    {result.map((res, index) => (
                        <tr key={res.boardNo || index}>
                            <MainBodyNo>{res.boardNo}</MainBodyNo>
                            <MainBodyTitle><Link to={`/select/${res.boardNo}`}>{res.boardTitle}</Link></MainBodyTitle>
                            <MainBodyName>{res.boardName}</MainBodyName>
                            <MainBodyCreateDate>{res.createDate}</MainBodyCreateDate>
                            <MainBodyCreateDate>{res.updateDate}</MainBodyCreateDate>
                        </tr>
                    ))}
                </MainTable>
            </MainSession>
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