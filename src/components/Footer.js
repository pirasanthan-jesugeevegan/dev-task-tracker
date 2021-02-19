import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <a href="https://pirasanth.com">
        <img
          style={{ width: '50px' }}
          src="http://pirasanth.com//img/images/PJ.png"
          alt="logo"
        />
      </a>
      <p> Copyright &copy; 2020</p>
      <Link to="/about">About</Link>
    </footer>
  );
};
export default Footer;
