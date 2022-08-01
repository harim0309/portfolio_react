import ImgComponent from '../components/ImgComponent';

function Login1() {

    const login2 = (e) => {
        window.location.href = '/portfolio_react/login2'
      }

    function login(e) {

        let length = document.getElementsByClassName('password').value;
        console.log(length);
    
        if (length < 8) {
            document.getElementsByClassName('warning').style.display = "block";
            document.getElementsByClassName('password').classList.add('wrong');
        } else {
            document.getElementsByClassName('warning').style.display = "none";
            document.getElementsByClassName('password').classList.remove('wrong');
        }
    }
    
    function enterkey(e) {
        if (window.event.keyCode == 13) {
            login();
        }
    }


return (
<div className='loginWrap'>
    <div className="imgWrap">
        <div className='gra'></div>
        <ImgComponent class={"back"} src={"loginimg.png"} />
    </div>
    <div className='box'>
        <div className='wrap'>
            <p className='txt'>
                리액트로 작업한<br />로그인 화면
            </p>

            <p className='title'>포트폴리오에 오신 것을 환영합니다. </p>
        </div>
        <div className="inputWrap">
            <input className='input' type="text" placeholder='이메일' />
            <input className='input password' type="password" placeholder='비밀번호 (8자리 이상)' onKeyUp={enterkey} />
            <span className='warning'>비밀번호를 8자리 이상 입력하세요.</span>
        </div>
        <button className='btn' onClick={login2}>
            로그인
        </button>
        <div className="txtcontwrap">
            <div className="txtcont">
                <p>비밀번호 재설정</p>
                <p>|</p>
                <p>회원가입</p>
            </div>
        </div>
        <div className="snswrap">
            <div className="line"></div>
            <div className="txt">SNS 계정으로 시작하기</div>
            <div className="line"></div>
        </div>
        <div className="snsimg">
            <img src={`${process.env.PUBLIC_URL}/images/google_32px.png`} className="circle"></img>
            <img src={`${process.env.PUBLIC_URL}/images/facebook_32px.png`} className="circle"></img>
            <img src={`${process.env.PUBLIC_URL}/images/apple_32px.png`} className="circle"></img>
            <img src={`${process.env.PUBLIC_URL}/images/naver_32px.png`} className="circle"></img>
            <img src={`${process.env.PUBLIC_URL}/images/kakaotalk_32px.png`} className="circle"></img>
        </div>

    </div>
</div>
);
}

export default Login1;