function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold text-blue-400">
          🚀 NEXGEN AI Suite
        </h1>

        <div className="space-x-8 text-slate-300">

          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#" className="hover:text-blue-400">
            Products
          </a>

          <a href="#" className="hover:text-blue-400">
            About
          </a>

          <a href="#" className="hover:text-blue-400">
            GitHub
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;