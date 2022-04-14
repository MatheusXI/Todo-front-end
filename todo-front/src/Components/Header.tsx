import IHeaderProps from "../Interfaces/IHeaderProps";
import Input from "./Input";

const Header = ({user, chave}: IHeaderProps) => {
  return (
    <div>
      <header>
        <Input />
        <h2>{user.name} teste {chave}</h2>
      </header>
      {/* <Profile /> */}
    </div>
  );
};

export default Header;
