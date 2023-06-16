
export interface INavbar { }

const Navbar: React.FC<INavbar> = () => {
  return <header>
    <h1>My Application</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  </header>;
};

export default Navbar;
