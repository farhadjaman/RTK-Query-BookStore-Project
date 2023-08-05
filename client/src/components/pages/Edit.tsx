import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookQuery, useEditBookMutation } from '../../app/api/apiSlice';
import { useState, useEffect } from 'react';
import Error from '../ui/Error';
const Edit = () => {
  const bookId = Number(useParams().bookId);
  const [
    editBook,
    { isLoading: editLoading, isError: editError, isSuccess: editSuccess },
  ] = useEditBookMutation();
  const { data: BookData, isError, isLoading } = useGetBookQuery(bookId);

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [featured, setFeatured] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (BookData) {
      setName(BookData.name);
      setAuthor(BookData.author);
      setThumbnail(BookData.thumbnail);
      setPrice(BookData.price);
      setRating(BookData.rating);
      setFeatured(BookData.featured);
    }
  }, [BookData]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    <Error error="There is an Error.Try again later" />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const book = {
      id: bookId,
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    };
    await editBook(book);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="lws-bookName">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-bookName"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
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
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="lws-featured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            <label htmlFor="lws-featured" className="ml-2 text-sm">
              {' '}
              This is a featured book{' '}
            </label>
          </div>

          <button type="submit" className="submit bg-slate-400" id="lws-submit">
            Edit Book
          </button>
        </form>
        {editLoading && <div>Loading...</div>}
        {editError && <Error error="There is an Error.Try again later" />}
        {editSuccess && <div>Book Edited Successfully</div>}
      </div>
    </div>
  );
};

export default Edit;
