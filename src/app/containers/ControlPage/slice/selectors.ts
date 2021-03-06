/*
 *
 * ControlPage Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.controlPage || initialState;

export const selectControlPage = createSelector(selectSlice, state => state);
