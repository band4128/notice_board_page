import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../../Atoms/Button";
import '../../Main/index.css'
import { Container, Footer, Header, Input, Session, Table, Textarea } from "../../Main/styled";

const UpdatePage = () => {

    const navigate = useNavigate();
    const [boardName, setBoardName] = useState();
    const [boardTitle, setBoardTitle] = useState();
    const [boardText, setBoardText] = useState();

    // 현재 날짜 구하기
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const todayMonth = month < 10 ? `0${month}` : month;
    const todayday = day < 10 ? `0${day}` : day;

    const formattedDate = `${today.getFullYear()}-${todayMonth}-${todayday}`;
    const [date] = useState(formattedDate);

    // 해당하는 번호의 이름, 제목, 내용을 가져오기
    const { boardNo } = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5555/board/boardBy?boardNo=${boardNo}`).then(res => {
            console.log(res.data);
            setResult(res.data);
            setBoardName(res.data.boardName);
            setBoardTitle(res.data.boardTitle);
            setBoardText(res.data.boardText);
        }).catch(err => console.log('데이터를 가져올 수 없습니다. (이유 : ' + err + ')'));
    }, []);

    // 수정하기
    const onSubmit = () => {
        axios.get(`http://localhost:5555/board/update`, {
            params: {
                boardNo: boardNo,
                boardText,
                boardTitle,
                createDate: formattedDate
            }
        }).then(res => {
            alert("수정이 완료되었습니다.")
            navigate("/");
        }).catch(err => {
            console.log('데이터를 수정하지지 못하였습니다. (이유 : ' + err + ')');
            navigate("/");
        });
    }


    return (
        <Container>
            <Header>
                <h1>수정하기</h1>
            </Header>
            <Session>
                {result && (
                    <Table border={1}>
                        <tr>
                            <th style={{
                                width: '100px',
                                height: '50px',
                            }}>작성자</th>
                            <td>
                                <Input
                                    type="text"
                                    readOnly
                                    value={boardName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th
                                style={{
                                    height: '70px'
                                }}
                            >제목</th>
                            <td>
                                <Input
                                    type="text"
                                    value={boardTitle}
                                    onChange={(e) => setBoardTitle(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <Textarea
                                value={boardText}
                                    onChange={(e) => setBoardText(e.target.value)}
                                ></Textarea>
                            </td>
                        </tr>
                        <tr>
                            <th
                                style={{ height: '50px' }}
                            >작성일</th>
                            <td>
                                <Input
                                    type="date"
                                    value={date}
                                    readOnly
                                />
                            </td>
                        </tr>
                    </Table>
                )}
            </Session>
            <Footer>
                <Button onClick={onSubmit}>수정하기</Button>
                <Link to={`/select/${boardNo}`}><Button>돌아가기</Button></Link>
            </Footer>
        </Container>
    )
}

export default UpdatePage;