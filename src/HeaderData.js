function HeaderData(props) {
  return (
    <div className="header">
      <div className="header-detail">
        <img src={props.glassObj.photoName} alt={props.glassObj.name}></img>
        <p>{props.glassObj.name}</p>
      </div>
    </div>
  );
}
export default HeaderData;
