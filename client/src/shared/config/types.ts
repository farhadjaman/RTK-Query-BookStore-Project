export interface Book {
  name: string;
  author: string;
  thumbnail: string;
  price: number;
  rating: number;
  featured: boolean;
  id: number;
}

export interface BookReducerState {
  filterType: string;
  searchQuery: Array<string>;
}
