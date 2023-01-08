import { Action, createReducer } from '@ngrx/store';
import { DefinitionOutputState, DEFINITION_OUTPUT_STATE_INITIAL } from './definition-output.state';

const _definitionOutputReducer = createReducer(DEFINITION_OUTPUT_STATE_INITIAL)

export function definitionOutputReducer(state: DefinitionOutputState, action: Action) {
    return _definitionOutputReducer(state, action)
}