import "./post.css";

export default function Post() {
  return (
    <div>
      <div className="post">
        <img
          className="postImg"
          src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
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
