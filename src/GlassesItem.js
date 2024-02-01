function GlassesItem(props) {
  return (
    <div className="glasses-detail">
      <img src={props.glassObj.photoName} alt={props.glassObj.name} />
      <div className="glasses-name">
        <p id="glass-name">{props.glassObj.name}</p>
        <p id="reaction">{props.glassObj.reaction}</p>
      </div>
      <p>{props.glassObj.price}</p>
      <p>{props.glassObj.color}</p>
    </div>
  );
}

export default GlassesItem;
