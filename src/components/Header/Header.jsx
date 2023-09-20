import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h2 className="text-center text-3xl py-8 bg-red-600 text-white mb-8">NavBar</h2>
      <nav className="flex justify-center items-center gap-6 text-4xl">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">All Posts</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
