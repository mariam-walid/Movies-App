const Link = (props) => {
    
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={props.data}>{props.content}</a>
      </li>
    </>
  );
};
export default Link;