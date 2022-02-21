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

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkGray};
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div<ModalContentProps>`
  height: ${(p) => (p.width < 768 ? '95%' : '')};
  overflow-y: ${(p) => (p.width < 768 ? 'auto' : '')};
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 90%;
    min-width: 288px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 7px 29px 0px;
    overflow-y: auto;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  `}

  h1 {
    margin-bottom: 0;
  }
  h3,
  h2 {
    margin: 0;
  }
`;

export const ModalContentHeader = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalContentHeaderImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 240px;
    height: 351px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

export const ModalContentHeaderImageDefault = styled.div`
  ${({ theme }) => css`
    width: 240px;
    height: 351px;
    background-color: ${theme.colors.secondaryColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  `}
`;

export const ModalContentTitle = styled.div``;
export const ModalContentTitleText = styled.h1`
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
  margin: 40px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalContentBodyTitle = styled.h2`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
export const ModalContentBodyContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ModalContentBodyText = styled.h3`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.xLightGray};
  `}
`;

export const ModalContentFooter = styled.div``;
export const ModalContentFooterContent = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  img {
    margin-right: 10px;
  }
`;
export const ModalContentFooterDescription = styled.span`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.xLightGray};
  `}
`;
