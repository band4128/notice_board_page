import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Atoms/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    InsertInput,
    InsertSession,
    InsertTable,
    InsertTextarea,
    InsertTh
} from "./styled";
import { Container, Footer, Header } from "../../Main/styled";

const InsertPage = () => {

    const [nextBoardNo, setNextBoardNo] = useState(1);
    const navigate = useNavigate();

    // 현재 날짜 구하기
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    const month = todayMonth < 10 ? `0${todayMonth}` : todayMonth;
    const day = todayDay < 10 ? `0${todayDay}` : todayDay;

    const currentDate = `${today.getFullYear()}-${month}-${day}`;
    const [date] = useState(currentDate);

    // 입력한 데이터 추가하기
    const [boardName, setBoardName] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [boardText, setBoardText] = useState("");

    const onSubmit = () => {

        if (!boardTitle || boardTitle.trim() === "") {
            alert("제목을 입력해주세요.");
            return;
        }
        if (!boardName || boardName.trim() === "") {
            alert("이름을 입력해주세요.");
            return;
        }
        if (!boardText || boardText.trim() === "") {
            alert("내용을 입력해주세요.");
            return;
        }

        axios.post(`http://localhost:5555/board/insert`, {
            boardName: boardName,
            boardText: boardText,
            boardTitle: boardTitle,
            createDate: currentDate
        }).then(res => {
            alert("등록이 완료되었습니다.")
            navigate("/");
        }).catch(err => {
            alert("데이터 추가를 실패하였습니다.");
            navigate("/insert");
        });
    }

    return (
        <Container>
            <Header>
                <h1>등록하기</h1>
            </Header>
            <InsertSession>
                <InsertTable border={1}>
                    <tr>
                        <InsertTh>제목</InsertTh>
                        <td>
                            <InsertInput
                                type="text"
                                onChange={(e) => setBoardTitle(e.target.value)}
                                placeholder="제목"
                            />
                        </td>
                    </tr>
                    <tr>
                        <InsertTh>작성자</InsertTh>
                        <td>
                            <InsertInput
                                type="text"
                                onChange={(e) => setBoardName(e.target.value)}
                                placeholder="작성자"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <InsertTextarea
                                onChange={(e) => setBoardText(e.target.value)}
                                placeholder="내용"
                            ></InsertTextarea>
                        </td>
                    </tr>
                    <tr>
                        <InsertTh>작성일</InsertTh>
                        <td>
                            <InsertInput
                                type="date"
                                value={date}
                                readOnly
                            />
                        </td>
                    </tr>
                </InsertTable>
            </InsertSession>
            <Footer>
                <Button onClick={onSubmit}>등록</Button>
                <Link to='/'><Button>돌아가기</Button></Link>
            </Footer>
        </Container>
    )
}

export default InsertPage;