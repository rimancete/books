import { BookDataType } from '../../interfaces/data';
import { BookCard } from './BookCard';
import { CardsContainer } from './styles';

export type CardsProps = {
  books: BookDataType[];
};

export const Cards = ({ books }: CardsProps) => (
  <CardsContainer>
    {books.map((book, index) => (
      <BookCard key={index} book={book} />
    ))}
  </CardsContainer>
);
