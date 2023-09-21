import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({log, setLog, setAuthenticate}) => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동','H&M HOME',
        'Sale',
        '지속가능성'
    ];
    
    const navigate = useNavigate();

    const goToLogin=() =>{
        if(log=="로그인"){
            navigate('/login');
        }
        else{
            setLog("로그인");
            setAuthenticate(false);
            navigate('/login');
        }
    }
    const goToMain=()=>{
        navigate('/');
    }
    const search=(event) =>{
        if(event.key == "Enter"){
            //입력한 검색어를 읽어와서 url을 바꿔준다
            let keyword = event.target.value
            navigate(`/?q=${keyword}`);
        }
    }
  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>{log}</div>
            </div>
        </div>

        <div>
            <div className='logo' onClick={goToMain}>
                <img 
                    width={100}
                    src='https://i.pinimg.com/1200x/aa/a2/25/aaa2257c91be9791a4b453ac1769638c.jpg'/>
            </div>
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu)=>(<li>{menu}</li>))}
            </ul>
            <div className='menu-search'>
                <FontAwesomeIcon className='icon' icon={faSearch} />
                <input type='text' onKeyDown={(event)=>search(event)} placeholder='제품 검색'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar