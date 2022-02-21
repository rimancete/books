import { useEffect, useState } from 'react';
import { BookDataType } from '../../interfaces/data';
import {
  serializedCardTitle,
  serializedModalTitle,
} from '../../services/serialize-string.service';
import {
  ModalBackground,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalContentBody,
  ModalContentBodyContent,
  ModalContentBodyText,
  ModalContentBodyTitle,
  ModalContentBodyTitleContent,
  ModalContentData,
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

import { IoCloseOutline } from 'react-icons/io5';
import { theme } from '../../styles/theme';

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
        <ModalCloseButton width={window.innerWidth}>
          <IoCloseOutline
            size={40}
            className="icon-pressable"
            style={{
              padding: 8,
              backgroundColor: theme.colors.white,
              position: 'absolute',
              right: 20,
              top: 10,
            }}
          />
        </ModalCloseButton>
        <ModalContent
          onClick={(e) => e.stopPropagation()}
          width={window.innerWidth}
        >
          <ModalContentHeaderImage>
            {!imgLoadError ? (
              <img src={data.imageUrl} />
            ) : (
              <ModalContentHeaderImageDefault />
            )}
          </ModalContentHeaderImage>
          <ModalContentData>
            <ModalContentHeader>
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
            </ModalContentHeader>

            <ModalContentBody>
              <ModalContentBodyTitle>INFORMAÇÕES</ModalContentBodyTitle>

              <ModalContentBodyContent>
                <ModalContentBodyTitleContent>
                  <ModalContentBodyTitle>Páginas</ModalContentBodyTitle>
                </ModalContentBodyTitleContent>
                <ModalContentBodyText>
                  {data.pageCount} páginas
                </ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitleContent>
                  <ModalContentBodyTitle>Editora</ModalContentBodyTitle>
                </ModalContentBodyTitleContent>
                <ModalContentBodyText>
                  Editora {data.publisher}
                </ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitleContent>
                  <ModalContentBodyTitle>Publicação</ModalContentBodyTitle>
                </ModalContentBodyTitleContent>
                <ModalContentBodyText>{data.published}</ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitleContent>
                  <ModalContentBodyTitle>Idioma</ModalContentBodyTitle>
                </ModalContentBodyTitleContent>
                <ModalContentBodyText>{data.language}</ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitleContent>
                  <ModalContentBodyTitleContent>
                    <ModalContentBodyTitle>
                      Título Original
                    </ModalContentBodyTitle>
                  </ModalContentBodyTitleContent>
                </ModalContentBodyTitleContent>
                <ModalContentBodyText>{data.title}</ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitleContent>
                  <ModalContentBodyTitle>ISBN-10</ModalContentBodyTitle>
                </ModalContentBodyTitleContent>
                <ModalContentBodyText>{data.isbn10}</ModalContentBodyText>
              </ModalContentBodyContent>

              <ModalContentBodyContent>
                <ModalContentBodyTitleContent>
                  <ModalContentBodyTitle>ISBN-13</ModalContentBodyTitle>
                </ModalContentBodyTitleContent>
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
          </ModalContentData>
        </ModalContent>
      </ModalBackground>
    </ModalContainer>
  );
}
