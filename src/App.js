import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체 상품 페이지, 로그인 페이지, 상품상세페이지
//1-1. 네비게이션 바 만들기
//2. 전체 상품 페이지 에서는 전체 상품을 볼 수 있음
//3. 로그인 버튼을 누르면 로그인 페이지가 나옴
//4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있음
//5. 로그아웃 버튼을 클릭하면 로그아웃이 됨
//6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없음(다시 로그인 페이지로 돌아감)
//7. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보임
//8. 상품을 검색할 수 있음

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인이 됨 false면 로그인이 안됨
  const [log, setLog] = useState("로그인");

  useEffect(()=>{

  },[authenticate,log]);

  return (
    <div>
      <Navbar log={log} setLog={setLog} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login authenticate={authenticate} setAuthenticate={setAuthenticate} setLog={setLog}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
