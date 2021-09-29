import { useParams } from 'react-router-dom';
import Person from '../models/person';
import { useStore } from '../store/store';

type PersonProfileParams = {
  id: string
};

const PersonProfile = () => {
  const params = useParams<PersonProfileParams>();
  const [ state ] = useStore();
  const { people }: { people?: Person[] } = state;
  const numId = Number(params.id);
  const person = people?.find((p) => p.id === numId);

  return (
    <div>Hello person profile! Profile for person {person?.name} </div>
  );
};

export default PersonProfile;