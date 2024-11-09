const Filter = ({ onCategoryChange }) => {
  const handleCategory = (e) => {
 
    onCategoryChange(e.target.value);
  };

  return (
    <div>
      <select name="filter" onChange={handleCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Filter;
