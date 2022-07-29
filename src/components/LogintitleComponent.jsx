const LogintitleComponent = (props) => {
return (
<div className='wrap'>
    <span className='txt'>
        {props.name}
    </span>
    <span className="sla">님</span>

    <p className='title'>포트폴리오에 다시 오신 것을 환영합니다.</p>
</div>
);
}

export default LogintitleComponent;