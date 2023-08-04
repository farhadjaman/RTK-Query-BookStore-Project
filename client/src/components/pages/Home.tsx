import Books from '../Books';

export default function Home() {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button className="px-8 py-1 rounded-md active-filter">All</button>
            <button className="px-8 py-1 rounded-md">Featured</button>
          </div>
        </div>
        <Books />
      </div>
    </main>
  );
}
