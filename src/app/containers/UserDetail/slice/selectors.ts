/*
 *
 * UserDetail Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.userDetail || initialState;

export const selectUserDetail = createSelector(selectSlice, state => state);
