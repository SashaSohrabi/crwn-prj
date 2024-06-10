import { createSelector } from 'reselect';
import {  Category, CategoryMap } from './category.types';
import { CategoriesState } from './category.reducer';

const selectCategoryReducer = (state: any): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc: CategoryMap, category: Category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);
