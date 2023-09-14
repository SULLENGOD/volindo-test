

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light" style={navbarStyle}>
      <div className="container-fluid justify-content-center">
        <a href="https://luis-m-sullen.vercel.app/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="src/assets/Eye-white.svg"
            alt=""
            width="50"
            height="40"
          />
        </span>
        </a>
      </div>
    </nav>
  );
};

const navbarStyle = {
  background: 'rgb(0,0,0)',
};