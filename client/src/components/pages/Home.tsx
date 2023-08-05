import Books from '../Books';
import { useState } from 'react';
import { FilterType } from '../../shared/config/enums';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { filterBooks } from '../../app/reducers/bookReducer';
import { useEffect } from 'react';
export default function Home() {
  const { filterType } = useAppSelector((state) => state.book);
  const [isActive, setIsActive] = useState(true);
  const dispatch = useAppDispatch();

  const handleToggle = (type: FilterType) => {
    if (type === FilterType.All) {
      setIsActive(true);
      dispatch(filterBooks(FilterType.All));
    } else {
      setIsActive(false);
      dispatch(filterBooks(FilterType.Featured));
    }
  };

  useEffect(() => {
    if (filterType === FilterType.All) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [filterType]);

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleToggle(FilterType.All)}
              className={`px-8 py-1 rounded-md ${isActive && 'active-filter'}`}
            >
              All
            </button>
            <button
              onClick={() => handleToggle(FilterType.Featured)}
              className={`px-8 py-1 rounded-md ${!isActive && 'active-filter'}`}
            >
              Featured
            </button>
          </div>
        </div>
        <Books />
      </div>
    </main>
  );
}
