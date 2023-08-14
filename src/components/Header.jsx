const Header = (props) => {
  return (
    <header className={`${props.className}`}>
      <h1>{props.name}</h1>
    </header>
  );
};

export default Header;
