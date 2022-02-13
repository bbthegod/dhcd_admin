/*
 *
 * QuestionPage Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.questionPage || initialState;

export const selectQuestionPage = createSelector(selectSlice, state => state);
