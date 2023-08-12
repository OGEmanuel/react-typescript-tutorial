type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) =>
  // const List = <T extends {}>({ items, onClick }: ListProps<T>) =>
  // const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {

  {
    return (
      <div>
        <h2>List of items</h2>
        {items.map((item, i) => {
          return (
            <div key={item.id} onClick={() => onClick(item)}>
              {item}
            </div>
          );
        })}
      </div>
    );
  };

export default List;
