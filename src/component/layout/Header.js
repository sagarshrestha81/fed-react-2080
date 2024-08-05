export default function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src="/logo/Aadim-College-logo-final.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#!">Home</a></li>
          <li><a href="#!">About Us</a></li>
          <li><a href="#!">Program</a></li>
          <li><a href="#!">Facilities</a></li>
          <li><a href="#!">Gallery</a></li>
          <li><a href="#!">Events</a></li>
          <li><a href="https://facebook.com">Contact Us</a></li>
          <li><a href="https://facebook.com" className="btn btn-success">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
