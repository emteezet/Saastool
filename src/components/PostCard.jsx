import "../styles/PostCard.css";

const PostCard = ({ title, description, category, author, image }) => {
  return (
    <div className="post-card">
      <img src={image} alt={title} className="post-card-image" />
      <div className="post-card-content">
        <span className="category-badge">{category}</span>
        <h3 className="post-card-title">{title}</h3>
        <p className="post-card-description">{description}</p>
        <div className="post-card-footer">
          <span>By {author}</span>
          <a href="#" className="read-more-link">
            Read more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
