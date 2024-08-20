import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header >
      <div className="container header-container">
      <div className="header-logo">
        <img src="/logo/Aadim-College-logo-final.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/hook">Hook</Link></li>
          <li><a href="https://facebook.com">Contact Us</a></li>
          <li><a href="https://facebook.com" className="btn btn-success">Apply now</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}
