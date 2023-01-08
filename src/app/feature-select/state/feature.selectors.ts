import { FeatureState } from './feature.state';
import { createFeatureSelector } from "@ngrx/store"
import { createSelector } from '@ngrx/store';

export const FEATURE_STATE_NAME = 'featureState'

const featureState = createFeatureSelector<FeatureState>(FEATURE_STATE_NAME)

export const featureFilePath$ = createSelector(featureState, (state: FeatureState) => state.featureFilePath)
export const featureFileContent$ = createSelector(featureState, (state: FeatureState) => state.featureFileContent)
export const featureFile$ = createSelector(featureState, (state: FeatureState) => state.featureFile)