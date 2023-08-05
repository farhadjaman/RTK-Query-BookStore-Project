import Book from './book.tsx';
import { useGetBooksQuery } from '../../app/api/apiSlice.ts';
import BookLoader from '../ui/loaders/BookLoader.tsx';
import Error from '../ui/Error.tsx';

const Index = () => {
  const { data, isError, isLoading } = useGetBooksQuery();

  let content = null;
  if (isLoading) {
    content = <BookLoader />;
  }
  if (isError) {
    content = <Error error="There was an error occured!" />;
  }
  if (data && data.length > 0) {
    content = data.map((book) => <Book key={book.id} book={book} />);
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Index;
