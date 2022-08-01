import ImgComponent from '../components/ImgComponent';
import SnsbtnComponent from '../components/SnsbtnComponent';
import LogintitleComponent from '../components/LogintitleComponent'

let pstyle = {
    padding: 0,
    color: '#bad9ff',
    fontWeight: 'bold'
};

function Login3() {

    const login2 = (e) => {
        window.location.href = '/portfolio_react/login2'
      }
return (
<div className='loginWrap'>
    <div className="imgWrap">
        <div className='gra'></div>
        <ImgComponent class={"back"} src={"loginimg.png"} />
    </div>
    <div className='box'>
        <LogintitleComponent name={"김하림"} />
        <div className="loginbtnWrap">
            <SnsbtnComponent img={"google_icon.png"} txt={"Google로 계속하기"} />
            <SnsbtnComponent img={"email_20px.png"} txt={"이메일로 계속하기"} />
            <SnsbtnComponent img={"kakaotalk_20px.png"} txt={"Kakaotalk으로 계속하기"} />
        </div>
        <div className="txtcontwrap">
            <div className="txtcont">
                <p style={pstyle} onClick={login2}>다른 로그인 수단 이용하기</p>
            </div>
        </div>
    </div>
</div>
);
}

export default Login3;