import { Link } from "react-router-dom";
import {
    MainBodyCreateDate,
    MainBodyName,
    MainBodyNo,
    MainBodyTitle,
    MainContainer,
    MainDateTh,
    MainFooter,
    MainHeader,
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
        }).catch(err => console.log('데이터가 없습니다. (이유 : ' + err + ')'));
    }, []);
    return (
        <MainContainer>
            <MainHeader>
                <h1>네입버 게시판</h1>
            </MainHeader>
            <MainSession>
                <MainTable>
                    <thead>
                        <tr>
                            <MainNoTh>번호</MainNoTh>
                            <MainTitleTh>제목</MainTitleTh>
                            <MainNameTh>작성자</MainNameTh>
                            <MainDateTh>작성일</MainDateTh>
                        </tr>
                    </thead>
                    {result.map((res, index) => (
                        <tbody key={res.boardNo || index}>
                            <tr>
                                <MainBodyNo>{res.boardNo}</MainBodyNo>
                                <MainBodyTitle><Link to={`/select/${res.boardNo}`}>{res.boardTitle}</Link></MainBodyTitle>
                                <MainBodyName>{res.boardName}</MainBodyName>
                                <MainBodyCreateDate>{res.createDate}</MainBodyCreateDate>
                            </tr>
                        </tbody>
                    ))}
                </MainTable>
            </MainSession>
            <MainFooter>
                <Link to='/insert'>
                    <Button>
                        등록하러 가기
                    </Button>
                </Link>
            </MainFooter>
        </MainContainer>
    )
}

export default MainPage;