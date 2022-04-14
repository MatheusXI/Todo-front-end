import Input from "./Input";

interface Props {
  user: usuario;
  chave: string
}

interface usuario {
  name: string;
  profilePic: string;
  todos: string[];
}
const Header = ({user, chave}: Props) => {
  return (
    <div>
      <header>
        <Input />
        <h2>{user.name}  {chave}</h2>
      </header>
      {/* <Profile /> */}
    </div>
  );
};

export default Header;
