/*
 *
 * SurveyPage Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.surveyPage || initialState;

export const selectSurveyPage = createSelector(selectSlice, state => state);
