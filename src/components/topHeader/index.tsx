import "./style.scss";

const TopHeader: React.FC = () => {
  return (
    <div className="top-header">
      <ul>
        <li>
          <a href="/">My Store</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
