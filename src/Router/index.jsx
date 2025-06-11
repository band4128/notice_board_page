import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/Page/Main";
import InsertPage from "../Components/Page/Sub/Insert";
import SelectPage from "../Components/Page/Sub/Select";
import UpdatePage from "../Components/Page/Sub/Update";

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/insert' element={<InsertPage />}/>
            <Route path='/select/:boardNo' element={<SelectPage />}/>
            <Route path='/update/:boardNo' element={<UpdatePage />}/>
        </Routes>
    )

}

export default Router;