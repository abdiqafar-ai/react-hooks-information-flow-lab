const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </header>
  )
};
export default Header