import { useCallback, useEffect, useState } from 'react';
import { getCurrentUser } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { env } from '../../environments';
import { Layout } from '../../components/Layout';
import { HomeContainer } from './styles';

import { getBooks } from '../../services/user.service';
import { Cards } from '../../components/Cards';
import { PageSelector } from '../../components/PageSelector';
import { getWindowsDimensions } from '../../services/screen-size.service';

export function Home() {
  const currentUser = getCurrentUser();

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState();

  const navigate = useNavigate();

  const [width, setWidth] = useState<number>();

  useEffect(() => {
    !currentUser && navigate(`${env.ROUTER_UTILS.base.login}`);
  });

  const loadBooks = useCallback(async (page, booksPerPage) => {
    getBooks(page, booksPerPage).then((response) => {
      response &&
        (setTotalPages(response.data.totalPages),
        setPage(response.data.page),
        setBooks(response.data.data));
    });
  }, []);

  useEffect(() => {
    loadBooks(page, booksPerPage);
  }, [loadBooks, booksPerPage, page]);

  useEffect(() => {
    const handleSize = () => {
      const { width } = getWindowsDimensions();
      setWidth(width);
    };

    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return (
    <Layout hasHeader={true} isHome={true}>
      <HomeContainer width={width ? width : window.innerWidth}>
        {books.length > 0 ? (
          <Cards books={books} />
        ) : (
          <p>Livros não encontrados</p>
        )}
        {totalPages && (
          <PageSelector
            page={page}
            totalPages={totalPages}
            onBeforePage={() => page > 1 && setPage((prevPage) => prevPage - 1)}
            onNextPage={() =>
              page < totalPages && setPage((prevPage) => prevPage + 1)
            }
          />
        )}
      </HomeContainer>
    </Layout>
  );
}
