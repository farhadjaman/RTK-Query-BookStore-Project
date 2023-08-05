import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { searchBooks } from '../app/reducers/bookReducer';
export default function Navigation() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const searchArray = searchString.toLowerCase().split(' ');
    dispatch(searchBooks(searchArray));
  }, [searchString, dispatch]);

  return (
    <nav className="py-4 2xl:px-6 w-full">
      <div className="container flex flex-col items-center gap-4 justify-center">
        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className={`cursor-pointer ${pathname === '/' && 'font-semibold'}`}
            to="/"
            id="bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link
            className={`cursor-pointer ${
              pathname === '/books/add' && 'font-semibold'
            }`}
            to="/books/add"
            id="addBook"
          >
            <li>Add Book</li>
          </Link>
        </ul>
        {pathname === '/' && (
          <form className="flex items-start">
            <div className="group relative rounded-md bg-white min-w-[512px]">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Search books..."
                className="search"
                id="search"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
          </form>
        )}
      </div>
    </nav>
  );
}
