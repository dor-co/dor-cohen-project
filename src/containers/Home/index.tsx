import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Home = () => {
  const data = useSelector((state: RootState) => state);

  return (
    <div className="App">
      <header className="App-header">
        <p>Home Page</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
