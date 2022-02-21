import { useEffect, useState } from 'react';
import { BookDataType } from '../../../interfaces/data';
import { serializedCardTitle } from '../../../services/serialize-string.service';
import {
  BookCardContainer,
  BookCardContent,
  BookCardContentImage,
  BookCardContentData,
  BookCardContentDataTitle,
  BookCardContentDataTitleText,
  BookCardContentDataAuthorText,
  BookCardContentDataBody,
  BookCardContentDataBodyText,
  BookCardContentImageDefault,
} from './styles';

export type BookCardProps = {
  book: BookDataType;
  onClick?: () => void;
};

export const BookCard = ({ book, onClick }: BookCardProps) => {
  const [imgLoadError, setImgLoadError] = useState(false);
  const imageError = async (url: string) => {
    const tester = new Image();
    tester.onerror = () => setImgLoadError(true);
    tester.onload = () => setImgLoadError(false);
    tester.src = url;
  };
  useEffect(() => {
    imageError(book.imageUrl);
  });
  return (
    <BookCardContainer onClick={onClick}>
      <BookCardContent>
        <BookCardContentImage>
          {!imgLoadError ? (
            <img src={book.imageUrl} />
          ) : (
            <BookCardContentImageDefault />
          )}
        </BookCardContentImage>
        <BookCardContentData>
          <BookCardContentDataTitle>
            <BookCardContentDataTitleText>
              {serializedCardTitle(book.title)}
            </BookCardContentDataTitleText>
            {book.authors.map((author, index) =>
              index < 2 ? (
                <BookCardContentDataAuthorText key={index}>
                  {author}
                  {book.authors.length > 1 &&
                    book.authors.length !== index + 1 &&
                    ','}
                </BookCardContentDataAuthorText>
              ) : (
                <BookCardContentDataAuthorText key={index}>
                  e outros...
                </BookCardContentDataAuthorText>
              ),
            )}
          </BookCardContentDataTitle>
          <BookCardContentDataBody>
            <BookCardContentDataBodyText>
              {book.pageCount} páginas
            </BookCardContentDataBodyText>
            <BookCardContentDataBodyText>
              Editora {book.publisher}
            </BookCardContentDataBodyText>
            <BookCardContentDataBodyText>
              Publicado em {book.published}
            </BookCardContentDataBodyText>
          </BookCardContentDataBody>
        </BookCardContentData>
      </BookCardContent>
    </BookCardContainer>
  );
};
