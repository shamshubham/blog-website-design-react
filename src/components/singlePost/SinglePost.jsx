import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://tinypng.com/images/social/website.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Shubham</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur quam massa, nec elementum dolor luctus nec. Donec interdum
          mauris ut neque interdum vulputate. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed consectetur quam massa, nec elementum
          dolor luctus nec. Donec interdum mauris ut neque interdum vulputate.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur quam massa, nec elementum dolor luctus nec. Donec interdum
          mauris ut neque interdum vulputate. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed consectetur quam massa, nec elementum
          dolor luctus nec. Donec interdum mauris ut neque interdum vulputate.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur quam massa, nec elementum dolor luctus nec. Donec interdum
          mauris ut neque interdum vulputate. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed consectetur quam massa, nec elementum
          dolor luctus nec. Donec interdum mauris ut neque interdum vulputate.
        </p>
      </div>
    </div>
  );
}
