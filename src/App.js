import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchFeild = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFeild };
    });
  }

  render() {
    const { monsters, searchFeild } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLocaleLowerCase().includes(searchFeild)
    );


    return (
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex</h1>
        <SearchBox 
          className="monster-search-box"
          placeholder='Search Monster'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
