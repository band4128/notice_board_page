import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../../Atoms/Button";
import { UpdateBoardNameTh, UpdateBoardTitleTh, UpdateContainer, UpdateCreateDateTh, UpdateFooter, UpdateHeader, UpdateInput, UpdateSession, UpdateTable, UpdateTextarea } from "./styled";

const UpdatePage = () => {

    const navigate = useNavigate();
    const [boardName, setBoardName] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [boardText, setBoardText] = useState("");

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
        }).catch(err => console.log('데이터를 가져올 수 없습니다. (이유 : ' + err + ')'));
    }, []);

    // 수정하기
    const onSubmit = () => {
        axios.get(`http://localhost:5555/board/update?boardNo=${boardNo}&boardText=${boardText}&boardTitle=${boardTitle}&createDate=${currentDate}`)
            .then(res => {
                alert("수정이 완료되었습니다.")
                navigate("/");
            }).catch(err => {
                console.log('데이터를 수정하지지 못하였습니다. (이유 : ' + err + ')');
                navigate("/");
            });
    }


    return (
        <UpdateContainer>
            <UpdateHeader>
                <h1>수정하기</h1>
            </UpdateHeader>
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
                        <tr>
                            <UpdateCreateDateTh>작성일</UpdateCreateDateTh>
                            <td>
                                <UpdateInput
                                    type="date"
                                    value={date}
                                    readOnly
                                />
                            </td>
                        </tr>
                    </UpdateTable>
                )}
            </UpdateSession>
            <UpdateFooter>
                <Button onClick={onSubmit}>수정하기</Button>
                <Link to={`/select/${boardNo}`}><Button>돌아가기</Button></Link>
            </UpdateFooter>
        </UpdateContainer>
    )
}

export default UpdatePage;