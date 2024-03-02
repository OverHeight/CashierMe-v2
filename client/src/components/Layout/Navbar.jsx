export const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl font text-white">CashierMe</a>
      </div>
      <div className="flex-none">
        <ul className="text-white menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
