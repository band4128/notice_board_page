import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../../Atoms/Button";
import '../../Main/index.css'
import { BoardName, BoardText, BoardTitle, Container, DateText, Footer, Header, Session } from "../../Main/styled";

const SelectPage = () => {

    const { boardNo } = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5555/board/boardBy?boardNo=${boardNo}`).then(res => {
            setResult(res.data)
        }).catch(err => console.log('데이터를 조회할 수 없습니다다. (이유 : ' + err + ')'));
    }, []);

    const navigate = useNavigate();

    const onSubmit = () => {
        axios.get(`http://localhost:5555/board/deleteBy?boardNo=${boardNo}`).then(res => {
            alert("삭제가 완료되었습니다.")
            navigate("/");
        }).catch(err => {
            console.log('데이터를 제거하지 못하였습니다. (이유 : ' + err + ')');
            navigate("/");
        });
    }


    return (
        <Container>
            <Header>
                <h1>자유 게시판</h1>
            </Header>
            {result && (
                <Session>
                    <BoardTitle>
                        <h1>{result.boardTitle}</h1>
                    </BoardTitle>
                    <BoardName>
                        <h4>{result.boardName}</h4>
                        <DateText>{result.createDate}</DateText>
                    </BoardName>
                    <BoardText>
                        <p>{result.boardText}</p>
                    </BoardText>
                </Session>
            )}

            <Footer>
                <Link to={`/update/${boardNo}`}>
                    <Button>
                        수정하기
                    </Button>
                </Link>
                <Button onClick={onSubmit}>
                    삭제하기
                </Button>
                <Link to='/'>
                    <Button>
                        홈으로
                    </Button>
                </Link>
            </Footer>
        </Container>
    )
}

export default SelectPage;