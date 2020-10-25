import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);


  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((obj) => {
    dispatch(setSortBy(obj));
  }, []);

  const handeAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          activeCategory={category}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">
        {category !== null ? categoryNames[category] : 'Все пиццы'}
      </h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
            <PizzaBlock
              onClickAddPizza={handeAddPizzaToCart}
              key={obj.id}
              {...obj}
              addedCount={cartItems[obj.id] && cartItems[obj.id].length}
            />
          ))
          : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
