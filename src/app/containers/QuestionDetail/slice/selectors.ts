/*
 *
 * QuestionDetail Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.questionDetail || initialState;

export const selectQuestionDetail = createSelector(selectSlice, state => state);
