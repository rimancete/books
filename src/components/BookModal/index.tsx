import { useEffect, useState } from 'react';
import { BookDataType } from '../../interfaces/data';
import { serializedModalTitle } from '../../services/serialize-string.service';
import {
  ModalBackground,
  ModalContainer,
  ModalContent,
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
        <ModalContent onClick={(e) => e.stopPropagation()}>
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
          </ModalContentHeader>
        </ModalContent>
      </ModalBackground>
    </ModalContainer>
  );
}
