import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Atoms/Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
    InsertContainer,
    InsertFooter,
    InsertHeader,
    InsertInput,
    InsertSession,
    InsertTable,
    InsertTextarea,
    InsertTh
} from "./styled";

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

    // DB에서 번호가 가장 큰 값에 1 더한 수 출력
    useEffect(() => {
        axios.get('http://localhost:5555/board/boardAll').then(res => {
            const boards = res.data;
            const maxNo = boards.reduce((max, item) => Math.max(max, Number(item.boardNo)), 1);
            setNextBoardNo(maxNo + 1);
        }).catch(err => {
            console.log("번호를 불러올 수 없습니다. (이유 : " + err + " )")
            setNextBoardNo(1);
        })
    }, [])

    // 입력한 데이터 추가하기
    const [boardName, setBoardName] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [boardText, setBoardText] = useState("");
    const inputTitleRef = useRef(null);
    const inputNameRef = useRef(null);
    const inputTextRef = useRef(null);

    const onSubmit = () => {

        if (!boardTitle || boardTitle.trim() === "") {
            alert("제목을 입력해주세요.");
            inputTitleRef.current.focus();
            return;
        }
        if (!boardName || boardName.trim() === "") {
            alert("이름을 입력해주세요.");
            inputNameRef.current.focus();
            return;
        }
        if (!boardText || boardText.trim() === "") {
            alert("내용을 입력해주세요.");
            inputTextRef.current.focus();
            return;
        }

        axios.get(`http://localhost:5555/board/insert?boardNo=${nextBoardNo}&boardName=${boardName}&boardText=${boardText}&boardTitle=${boardTitle}&createDate=${currentDate}`).then(res => {
            alert("등록이 완료되었습니다.")
            navigate("/");
        }).catch(err => {
            console.log('데이터를 추가하지 못하였습니다. (이유 : ' + err + ')');
            navigate("/insert");
            alert("데이터 추가 싫패")
        });
    }

    return (
        <InsertContainer>
            <InsertHeader>
                <h1>등록하기</h1>
            </InsertHeader>
            <InsertSession>
                <InsertTable border={1}>
                    <tr>
                        <InsertTh>번호</InsertTh>
                        <td style={{ width: '250px' }}>
                            <InsertInput
                                type="text"
                                value={nextBoardNo}
                                onChange={(e) => setBoardNo(e.target.value)}
                                readOnly
                            />
                        </td>
                    </tr>
                    <tr>
                        <InsertTh>제목</InsertTh>
                        <td>
                            <InsertInput
                                type="text"
                                onChange={(e) => setBoardTitle(e.target.value)}
                                placeholder="제목"
                                ref={inputTitleRef}
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
                                ref={inputNameRef}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <InsertTextarea
                                onChange={(e) => setBoardText(e.target.value)}
                                placeholder="내용"
                                ref={inputTextRef}
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
            <InsertFooter>
                <Button onClick={onSubmit}>등록</Button>
                <Link to='/'><Button>돌아가기</Button></Link>
            </InsertFooter>
        </InsertContainer>
    )
}

export default InsertPage;