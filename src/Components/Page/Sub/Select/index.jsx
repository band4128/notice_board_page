import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../../Atoms/Button";
import {
    SelectBoardName,
    SelectBoardText,
    SelectBoardTitle,
    SelectDateText,
    SelectTable
} from "./styled";
import { Container, Footer, Header } from "../../Main/styled";

const SelectPage = () => {

    const { boardNo } = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5555/board/boardBy?boardNo=${boardNo}`).then(res => {
            setResult(res.data)
        }).catch(err => console.log('데이터를 조회할 수 없습니다.'));
    }, []);

    const navigate = useNavigate();

    const onSubmit = () => {
        axios.delete(`http://localhost:5555/board/deleteBy?boardNo=${boardNo}`).then(res => {
            alert("삭제가 완료되었습니다.")
            navigate("/");
        }).catch(err => {
            console.log('데이터를 제거하지 못하였습니다.');
            navigate("/");
        });
    }


    return (
        <Container>
            <Header>
                <h1>자유 게시판</h1>
            </Header>
            {result && (
                <SelectTable>
                    <SelectBoardTitle>
                        <h1>{result.boardTitle}</h1>
                    </SelectBoardTitle>
                    <SelectBoardName>
                        <h4>{result.boardName}</h4>
                        <SelectDateText>{result.createDate}</SelectDateText>
                    </SelectBoardName>
                    <SelectBoardText>
                        <p>{result.boardText}</p>
                    </SelectBoardText>
                </SelectTable>
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