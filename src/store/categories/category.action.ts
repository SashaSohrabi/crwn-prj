import { CATEGORIES_ACTION_TYPES, Category } from './category.types';
import {
  createAction,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type CategoryAction = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  Category[]
>;

export const setCategories = (categories: Category[]): CategoryAction =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
