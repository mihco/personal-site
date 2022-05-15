
function Post(props) {
    return (
      <div className="post">
          <div className="post-image"><img src={props.image}></img></div>
          <div className="post-title">
            <h1>{props.title}</h1>
          </div>
          <div className="post-date">
            <h3>{props.date}</h3>
          </div>
          <div className="post-content">
            <span>{props.content}</span>
          </div>
      </div>
    );
  }
  
  export default Post;