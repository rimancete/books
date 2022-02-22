import styled, { css } from 'styled-components';

interface ModalContentProps {
  width: number;
}

export const ModalContainer = styled.div`
  display: flex;
  .modal-visible.modal-hide {
    display: none;
  }
`;

export const ModalBackground = styled.div<ModalContentProps>`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkGray};
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => (p.width < 768 ? 'center' : '')};
  align-items: center;
`;

export const ModalCloseButton = styled.div`
  display: flex;
  margin: 30px 0;
`;
export const ModalContent = styled.div<ModalContentProps>`
  height: ${(p) => (p.width < 768 ? '89%' : '608px')};
  overflow-y: ${(p) => (p.width < 768 ? 'auto' : '')};
  flex-direction: ${(p) => (p.width < 768 ? 'column' : '')};
  max-width: ${(p) => (p.width < 768 ? '' : '769px')};
  margin-top: ${(p) => (p.width < 768 ? '' : '10px')};
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 85%;
    min-width: 288px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 7px 29px 0px;
    border-radius: 5px;
    display: flex;
  `}

  h1 {
    margin-bottom: 0;
  }
  h3,
  h2 {
    margin: 0;
  }
`;

export const ModalContentHeader = styled.div<ModalContentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.width < 768 ? 'center' : '')};
`;
export const ModalContentHeaderImage = styled.div<ModalContentProps>`
  display: flex;
  justify-content: center;
  margin-top: ${(p) => (p.width < 768 ? '' : '20px')};
  margin-bottom: ${(p) => (p.width < 768 ? '' : '20px')};
  margin-left: ${(p) => (p.width < 768 ? '' : '20px')};
  margin-right: ${(p) => (p.width < 768 ? '' : '50px')};

  img {
    width: ${(p) => (p.width < 768 ? '240px' : '349px')};
    height: ${(p) => (p.width < 768 ? '351px' : '512px')};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

export const ModalContentHeaderImageDefault = styled.div<ModalContentProps>`
  width: ${(p) => (p.width < 768 ? '240px' : '349px')};
  height: ${(p) => (p.width < 768 ? '351px' : '512px')};
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  `}
`;

export const ModalContentTitle = styled.div`
  display: inline;
  text-align: justify;
`;
export const ModalContentTitleText = styled.h1<ModalContentProps>`
  margin: ${(p) => (p.width < 768 ? '' : '0')};
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 500;
  `}
`;

export const ModalContentTitleAuthor = styled.div``;

export const ModalContentTitleAuthorText = styled.h3`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.secondaryColor};
    display: inline;
  `}
`;

export const ModalContentBody = styled.div`
  margin: 35px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
export const ModalContentBodyHeader = styled.div`
  margin-bottom: 10px;
`;

export const ModalContentBodyTitle = styled.h2`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: ${theme.font.sizes.xsmall};
    display: inline;
  `}
`;
export const ModalContentBodyContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContentBodyText = styled.h3`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.xLightGray};
    text-align: right;
  `}
`;

export const ModalContentFooter = styled.div``;
export const ModalContentFooterContent = styled.div`
  margin-top: 20px;
  img {
    margin-right: 10px;
  }
`;

export const ModalContentData = styled.div<ModalContentProps>`
  overflow: ${(p) => (p.width < 768 ? '' : 'auto')};
  margin-top: ${(p) => (p.width < 768 ? '' : '20px')};
  margin-bottom: ${(p) => (p.width < 768 ? '' : '20px')};
`;

// testar em mobile
export const ModalContentBodyTitleContent = styled.div`
  width: 80px;
  margin: -3px 0;
`;
export const ModalContentFooterTitleContent = styled.div<ModalContentProps>``;

export const ModalContentFooterText = styled.h3`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.xLightGray};
  `}
`;
