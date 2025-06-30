import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../../Atoms/Button";
import {
    UpdateBoardNameTh,
    UpdateBoardTitleTh,
    UpdateCreateDateTh,
    UpdateInput,
    UpdateSession,
    UpdateTable,
    UpdateTextarea
} from "./styled";
import { Container, Footer, Header } from "../../Main/styled";

const UpdatePage = () => {

    const navigate = useNavigate();
    const [boardName, setBoardName] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [boardText, setBoardText] = useState("");
    const [createDate, setCreateDate] = useState();

    // 현재 날짜 구하기
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    const month = todayMonth < 10 ? `0${todayMonth}` : todayMonth;
    const day = todayDay < 10 ? `0${todayDay}` : todayDay;

    const currentDate = `${today.getFullYear()}-${month}-${day}`;
    const [date] = useState(currentDate);

    // 해당하는 번호의 이름, 제목, 내용을 가져오기
    const { boardNo } = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5555/board/boardBy?boardNo=${boardNo}`).then(res => {
            setResult(res.data);
            setBoardName(res.data.boardName);
            setBoardTitle(res.data.boardTitle);
            setBoardText(res.data.boardText);
            setCreateDate(res.data.createDate);
        }).catch(err => console.log('데이터를 가져올 수 없습니다.'));
    }, []);

    // 수정하기
    const onSubmit = () => {
        axios.put(`http://localhost:5555/board/update`, {
            boardNo: boardNo,
            boardName: boardName,
            boardText: boardText,
            boardTitle: boardTitle,
            createDate: createDate,
            updateDate: date
        })
            .then(res => {
                alert("수정이 완료되었습니다.");
                navigate("/");
            }).catch(err => {
                alert("데이터 수정에 싫패하였습니다.");
                navigate(`/select/${boardNo}`);
            });
    }


    return (
        <Container>
            <Header>
                <h1>수정하기</h1>
            </Header>
            <UpdateSession>
                {result && (
                    <UpdateTable border={1}>
                        <tr>
                            <UpdateBoardNameTh>작성자</UpdateBoardNameTh>
                            <td>
                                <UpdateInput
                                    type="text"
                                    readOnly
                                    value={boardName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <UpdateBoardTitleTh>제목</UpdateBoardTitleTh>
                            <td>
                                <UpdateInput
                                    type="text"
                                    value={boardTitle}
                                    onChange={(e) => setBoardTitle(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <UpdateTextarea
                                    value={boardText}
                                    onChange={(e) => setBoardText(e.target.value)}
                                ></UpdateTextarea>
                            </td>
                        </tr>
                    </UpdateTable>
                )}
            </UpdateSession>
            <Footer>
                <Button onClick={onSubmit}>수정하기</Button>
                <Link to={`/select/${boardNo}`}><Button>돌아가기</Button></Link>
            </Footer>
        </Container>
    )
}

export default UpdatePage;