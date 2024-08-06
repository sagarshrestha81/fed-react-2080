export default function Header() {
  return (
    <header >
      <div className="container header-container">
      <div className="header-logo">
        <img src="/logo/Aadim-College-logo-final.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about">About Us</a></li>
          <li><a href="#!">Program</a></li>
          <li><a href="https://facebook.com">Contact Us</a></li>
          <li><a href="https://facebook.com" className="btn btn-success">Apply now</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}
