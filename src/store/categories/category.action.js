import { CATEGORIES_ACTION_TYPES } from './category.types';

export const setCategories = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});
