import { CATEGORIES_ACTION_TYPES } from './category.types';
import { CategoryAction } from './category.action';
import { Category } from './category.types';

export type CategoriesState = {
  readonly categories: Category[]
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as CategoryAction
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
