import BookComponent from './book.tsx';
import { useGetBooksQuery } from '../../app/api/apiSlice.ts';
import BookLoader from '../ui/loaders/BookLoader.tsx';
import Error from '../ui/Error.tsx';
import { useAppSelector } from '../../app/hooks.ts';
import { FilterType } from '../../shared/config/enums.ts';
import { Book } from '../../shared/config/types.ts';
import { ReactElement } from 'react';
const Index = () => {
  const { data, isError, isLoading } = useGetBooksQuery();
  const { filterType, searchQuery } = useAppSelector((state) => state.book);

  let content: ReactElement | null = null;
  if (isLoading) {
    content = <BookLoader />;
  }
  if (isError) {
    content = <Error error="There was an error occured!" />;
  }
  if (data && data.length > 0) {
    let bookData: Book[] = data;

    if (searchQuery.length > 0 && searchQuery[0] !== '') {
      bookData = bookData.filter((book) => {
        const bookNameArray = book.name
          .toLowerCase()
          .split(' ')
          .filter((item) => item !== '');
        const containsAnyvalue = bookNameArray.some((item) =>
          searchQuery.includes(item)
        );
        return containsAnyvalue;
      });
    }
    if (filterType === FilterType.Featured) {
      bookData = bookData.filter((book) => book.featured);
    }
    if (bookData.length === 0) {
      content = <Error error="No books found!" />;
    } else
      content = (
        <>
          {bookData.map((book) => (
            <BookComponent key={book.id} book={book} />
          ))}
        </>
      );
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Index;
