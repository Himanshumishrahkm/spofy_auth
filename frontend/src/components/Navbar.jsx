import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-black px-10 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          Spotify
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-gray-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-full bg-white px-5 py-2 font-medium text-black transition hover:bg-gray-200"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;