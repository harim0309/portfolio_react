const SnsbtnComponent = (props) => {
return (
<div className="snsbtn">
    <img src={process.env.PUBLIC_URL + "/images/" + props.img} className="icon"></img> {props.txt}
</div>

);
}

export default SnsbtnComponent;

// <img src={`${process.env.PUBLIC_URL}/images/google_icon.png`}