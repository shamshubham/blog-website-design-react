import "./header.css";

export default function Header() {
  return (
    <div>
      <div classname="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
          alt="HeaderImage"
        ></img>
      </div>
    </div>
  );
}
