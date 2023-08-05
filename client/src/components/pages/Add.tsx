import { useAddBookMutation } from '../../app/api/apiSlice';
import Error from '../ui/Error';

const Add = () => {
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    addBook(data);
  };

  return (
    <div className="container">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="lws-bookName">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-bookName"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-author">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-author"
              name="author"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-thumbnail">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-thumbnail"
              name="thumbnail"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="lws-price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="lws-price"
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-rating">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="lws-rating"
                name="rating"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="lws-featured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
            />
            <label htmlFor="lws-featured" className="ml-2 text-sm">
              {' '}
              This is a featured book{' '}
            </label>
          </div>

          <button
            type="submit"
            className="submit bg-slate-100 text-gray-800"
            id="lws-submit"
          >
            Add Book
          </button>
        </form>
        {isLoading && <p>Loading...</p>}
        {isError && <Error error="There is an Error while adding new book" />}
        {isSuccess && <p>Book Added Successfully</p>}
      </div>
    </div>
  );
};

export default Add;
