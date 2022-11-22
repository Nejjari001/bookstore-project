import types from '../types/types';

const initialState = {
  books: [],
};

// Action creator
export const checkBookStatus = () => ({
  type: types.CHECK_BOOK_STATUS,
});

// Categories reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_BOOK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export default categoriesReducer;
