import { Link } from "react-router-dom";
import {Container, Footer, Header, Session, Table } from "./styled";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../Atoms/Button";

const MainPage = () => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5555/board/boardAll').then(res => {
            console.log(res.data);
            setResult(res.data)
        }).catch(err => console.log('데이터가 없습니다. (이유 : ' + err + ')'));
    }, []);
    return (
        <Container>
            <Header>
                <h1>자유 게시판</h1>
            </Header>
            <Session>
                <Table border={1}>
                    <tr>
                        <th style={{ width: '100px' }}>번호</th>
                        <th style={{ width: '140px' }}>작성자</th>
                        <th style={{ width: '250px' }}>제목</th>
                        <th style={{ width: '150px' }}>작성일</th>
                    </tr>
                    {result && result.map((res, index) => (
                        <tr key={res.boardNo || index}>
                            <td>{res.boardNo}</td>
                            <td>{res.boardName}</td>
                            <td style={{ textAlign: 'left', paddingLeft: '10px' }}><Link to={`/select/${res.boardNo }`}>{res.boardTitle}</Link></td>
                            <td>{res.createDate.slice(0, 10)}</td>
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