import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SearchPoster from './SearchPoster';
import { getTitles } from '@/api/tmdb';
import { Titles } from '@/types/tmdb';
import { Container, Heading } from '../my-list/MyListStyles';

const Search = () => {
  const { state } = useLocation<Titles[]>();
  const { query } = useParams<{ query: string }>();

  const [titles, setTitles] = useState<Titles[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state) {
      setTitles(state);
      setLoading(false);
    }

    if (!state && query) {
      (async () => {
        const res = await getTitles(query);
        setTitles(res);
        setLoading(false);
      })();
    }

    window.scrollTo(0, 0);
  }, [state, query]);

  return (
    <>
      <Heading>Results</Heading>

      {titles.length === 0 && !loading && (
        <Heading>
          Sorry, we can't find what you're looking for. Try adjusting your
          search.
        </Heading>
      )}

      <Container>
        {titles &&
          titles.map(
            (title) =>
              (title.poster_path || title.profile_path) && (
                <SearchPoster
                  id={title.id}
                  mediaType={title.media_type}
                  title={title.name || title.title!}
                  posterPath={title.profile_path || title.poster_path!}
                  key={`${title.media_type}_${title.id}`}
                />
              )
          )}
      </Container>
    </>
  );
};

export default Search;
