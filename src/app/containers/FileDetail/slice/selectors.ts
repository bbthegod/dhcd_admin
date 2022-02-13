/*
 *
 * FileDetail Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.fileDetail || initialState;

export const selectFileDetail = createSelector(selectSlice, state => state);
