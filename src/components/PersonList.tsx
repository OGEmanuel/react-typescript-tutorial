import { Name } from './Person.types';

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map(name => (
        <div key={name.first}>
          {name.first} {name.last}
        </div>
      ))}
    </div>
  );
};

export default PersonList;
