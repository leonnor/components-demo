import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => {
          console.log(index);
        }}>
          <MenuItem index={0}>
            link1
          </MenuItem>
          <MenuItem index={1} disabled>
            link2
          </MenuItem>
          <MenuItem index={2}>
            link3
          </MenuItem>
        </Menu>

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
