import Button, {ButtonType, ButtonSize} from "./components/Button/button";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Button disabled> Hello </Button>
        <Button autoFocus> Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Hello </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank"> Baidu </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Baidu </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
}

export default App;
