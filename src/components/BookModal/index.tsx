import { useEffect, useState } from 'react';
import { BookDataType } from '../../interfaces/data';
import {
  serializedCardTitle,
  serializedModalTitle,
} from '../../services/serialize-string.service';
import {
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalContentBody,
  ModalContentBodyContent,
  ModalContentBodyText,
  ModalContentBodyTitle,
  ModalContentFooter,
  ModalContentFooterContent,
  ModalContentFooterDescription,
  ModalContentHeader,
  ModalContentHeaderImage,
  ModalContentHeaderImageDefault,
  ModalContentTitle,
  ModalContentTitleAuthor,
  ModalContentTitleAuthorText,
  ModalContentTitleText,
} from './styled';

interface BookModalProps {
  data: BookDataType;
}

export function BookModal({ data }: BookModalProps) {
  const [imgLoadError, setImgLoadError] = useState(false);
  const imageError = async (url: string) => {
    const tester = new Image();
    tester.onerror = () => setImgLoadError(true);
    tester.onload = () => setImgLoadError(false);
    tester.src = url;
  };

  const handleClose = async () => {
    document.querySelector('.modal-visible')?.classList.add('modal-hide');
  };

  useEffect(() => {
    imageError(data.imageUrl);
  });

  return (
    <ModalContainer>
      <ModalBackground onClick={handleClose} className="modal-visible">
        <ModalContent
          onClick={(e) => e.stopPropagation()}
          width={window.innerWidth}
        >
          <ModalContentHeader>
            <ModalContentHeaderImage>
              {!imgLoadError ? (
                <img src={data.imageUrl} />
              ) : (
                <ModalContentHeaderImageDefault />
              )}
            </ModalContentHeaderImage>
            <ModalContentTitle>
              <ModalContentTitleText>
                {serializedModalTitle(data.title)}
              </ModalContentTitleText>
              <ModalContentTitleAuthor>
                {data.authors.map((author, index) => (
                  <ModalContentTitleAuthorText key={index}>
                    {author}
                    {data.authors.length > 1 &&
                      data.authors.length !== index + 1 &&
                      ','}
                    &nbsp;
                  </ModalContentTitleAuthorText>
                ))}
              </ModalContentTitleAuthor>
            </ModalContentTitle>

            <ModalContentBody>
              <ModalContentBodyTitle>INFORMAÇÕES</ModalContentBodyTitle>

              <ModalContentBodyContent>
                <ModalContentBodyTitle>Páginas</ModalContentBodyTitle>
                <ModalContentBodyText>
                  {data.pageCount} páginas
                </ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitle>Editora</ModalContentBodyTitle>
                <ModalContentBodyText>
                  Editora {data.publisher}
                </ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitle>Publicação</ModalContentBodyTitle>
                <ModalContentBodyText>{data.published}</ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitle>Idioma</ModalContentBodyTitle>
                <ModalContentBodyText>{data.language}</ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitle>Título Original</ModalContentBodyTitle>
                <ModalContentBodyText>
                  {serializedCardTitle(data.title)}
                </ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitle>ISBN-10</ModalContentBodyTitle>
                <ModalContentBodyText>{data.isbn10}</ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitle>ISBN-13</ModalContentBodyTitle>
                <ModalContentBodyText>{data.isbn13}</ModalContentBodyText>
              </ModalContentBodyContent>
            </ModalContentBody>

            <ModalContentFooter>
              <ModalContentBodyTitle>RESENHA DA EDITORA</ModalContentBodyTitle>
              <ModalContentFooterContent>
                <img src="/assets/images/quotation-marks.svg" />
                <ModalContentFooterDescription>
                  {data.description}
                </ModalContentFooterDescription>
              </ModalContentFooterContent>
            </ModalContentFooter>
          </ModalContentHeader>
        </ModalContent>
      </ModalBackground>
    </ModalContainer>
  );
}
