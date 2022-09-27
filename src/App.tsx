import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "./components/Button/button";
import Icon from "./components/Icon/icon";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Transition from './components/Transition/transition';

library.add(fas)
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="danger" size="10x" />
        <Menu defaultIndex='0' onSelect={(index) => {
          console.log(index);
        }} defaultOpenSubMenus={['2']}>
          <MenuItem>
            link1
          </MenuItem>
          <MenuItem disabled>
            link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            link3
          </MenuItem>
        </Menu>
        <Button size="lg" onClick={() => { setShow(!show) }}>
          Toggle
        </Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
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
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-top"
          wrapper
        >
          <Button btnType="primary" size="lg">Large Button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
