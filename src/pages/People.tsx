import { useEffect } from 'react';
import { useStore } from '../store/store';

import PersonItems from '../components/PersonItems';
import Person from '../models/person';

const People = () => {
  const [ state, dispatch ] = useStore(false);
  const { people }: { people?: Person[] } = state;

  useEffect(() => {
    if (people?.length === 0) {
      dispatch('LOAD_PEOPLE', null);
    }
  }, [dispatch, people]);

  return (
    <PersonItems />
  );
};

export default People;