import { Action, on } from '@ngrx/store'
import { createReducer } from '@ngrx/store'
import { loadFeatureFile } from './feature.actions'
import { FeatureState, FEATURE_STATE_INITIAL } from './feature.state'

const _featureReducer = createReducer(FEATURE_STATE_INITIAL,
    on(loadFeatureFile, (state: FeatureState, action) => {
        return {
            ...state,
            featureFile: action.featureFile,
            featureFilePath: action.featureFilePath,
            featureFileContent: action.featureFileContent,
        }
    })
)

export function featureReducer(state: FeatureState, action: Action) {
    return _featureReducer(state, action)
}