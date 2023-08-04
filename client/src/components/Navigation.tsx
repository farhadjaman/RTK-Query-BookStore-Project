import { Link } from 'react-router-dom';
export default function Navigation() {
  return (
    <nav className="py-4 2xl:px-6 w-full">
      <div className="container flex items-center justify-between">
        <ul className="hidden md:flex items-center space-x-6">
          <Link className="font-semibold cursor-pointer" to="/" id="bookStore">
            <li>Book Store</li>
          </Link>
          <Link className="cursor-pointer" to="/books/add" id="addBook">
            <li>Add Book</li>
          </Link>
        </ul>

        <form className="flex items-start">
          <div className="group relative rounded-md bg-white min-w-[512px]">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search books..."
              className="search"
              id="search"
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
