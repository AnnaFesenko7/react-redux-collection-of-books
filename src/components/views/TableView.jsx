import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../Table/Table';
import SortSelector from 'components/SortSelector/SortSelector';

const initialState = [
  { id: 1, value: 500 },
  { id: 2, value: 300 },
  { id: 3, value: 600 },
  { id: 4, value: 200 },
  { id: 5, value: 100 },
  { id: 6, value: 800 },
  { id: 7, value: 400 },
];

const sortOptions = [
  { value: 'ascending', label: 'По зростанню' },
  { value: 'descending', label: 'По спаданню' },
];

export default function TableView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expenses, setExpenses] = useState(initialState);

  const sortOrder =
    new URLSearchParams(location.search).get('sortBy') ?? 'ascending';

  const onSortOrderChange = order => {
    navigate(`?sortBy=${order}`);
  };

  useEffect(() => {
    setExpenses(prevExpenses =>
      [...prevExpenses].sort((a, b) => {
        return sortOrder === 'ascending'
          ? a.value - b.value
          : b.value - a.value;
      })
    );
  }, [sortOrder]);
  return (
    <>
      <SortSelector
        options={sortOptions}
        onChange={onSortOrderChange}
        value={sortOrder}
      />
      <Table items={expenses} />
    </>
  );
}
