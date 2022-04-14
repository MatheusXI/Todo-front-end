import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Footer from './Components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
