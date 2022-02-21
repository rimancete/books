import { PageSelectorContainer, PageSelectorContainerText } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PageSelectorProps {
  onBeforePage: () => void;
  onNextPage: () => void;
  page: number;
  totalPages: number;
}

export const PageSelector = ({
  onBeforePage,
  onNextPage,
  page,
  totalPages,
}: PageSelectorProps) => {
  return (
    <PageSelectorContainer>
      <FiChevronLeft
        size={40}
        className={page > 1 ? 'icon-pressable' : 'icon-pressable--disabled'}
        style={{ padding: 8 }}
        onClick={onBeforePage}
      />
      <PageSelectorContainerText>
        Página {page} de {totalPages}
      </PageSelectorContainerText>
      <FiChevronRight
        size={40}
        className={
          page < totalPages ? 'icon-pressable' : 'icon-pressable--disabled'
        }
        style={{ padding: 8 }}
        onClick={onNextPage}
      />
    </PageSelectorContainer>
  );
};
