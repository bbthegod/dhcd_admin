/*
 *
 * FilePage Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.filePage || initialState;

export const selectFilePage = createSelector(selectSlice, state => state);
