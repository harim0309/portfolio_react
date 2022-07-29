import ImgComponent from '../components/ImgComponent';
import SnsbtnComponent from '../components/SnsbtnComponent';

let pstyle = {
    padding: 0,
    color: '#bad9ff',
    fontWeight: 'bold'
}

function Login2() {

    const login3 = (e) => {
        window.location.href = '/login3'
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

            <p className='title'>포트폴리오에 오신 것을 환영합니다.</p>
        </div>
        <div className="loginbtnWrap">
            <SnsbtnComponent img={"google_icon.png"} txt={"Google로 시작하기"} />
            <SnsbtnComponent img={"facebook_20px.png"} txt={"Facebook으로 시작하기"} />
            <SnsbtnComponent img={"apple_20px.png"} txt={"Apple로 시작하기"} />
        </div>
        <div className="txtcontwrap">
            <div className="txtcont">
                <p>이메일로 시작하기</p>
                <p>|</p>
                <p style={pstyle} onClick={login3}>기존 로그인 수단</p>
            </div>
        </div>
    </div>
</div>
);
}

export default Login2;