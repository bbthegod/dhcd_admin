/*
 *
 * Dashboard Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.dashboard || initialState;

export const selectDashboard = createSelector(selectSlice, state => state);
