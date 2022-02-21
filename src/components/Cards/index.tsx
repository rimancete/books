import { useEffect, useState } from 'react';
import { BookDataType } from '../../interfaces/data';
import { BookModal } from '../BookModal';
import { BookCard } from './BookCard';
import { CardsContainer } from './styles';

export type CardsProps = {
  books: BookDataType[];
};

export const Cards = ({ books }: CardsProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<BookDataType>();

  const enableModal = async (data: BookDataType) => {
    setModalVisible(false);
    setModalData(data);
  };

  useEffect(() => {
    setModalVisible(true);
  }, [modalData, modalVisible]);
  return (
    <CardsContainer>
      {books.map((book, index) => (
        <BookCard key={index} book={book} onClick={() => enableModal(book)} />
      ))}
      {modalVisible && modalData && <BookModal data={modalData} />}
    </CardsContainer>
  );
};
