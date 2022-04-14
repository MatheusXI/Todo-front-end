import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";

const usuario = {
  name: 'Matheus',
  profilePic: 'teste',
  todos: []
}
const outraChave = 'teste'

function App() {
  return (
    <div className="App">
      <Header user={usuario} chave={outraChave} />
    </div>
  );
}

export default App;
