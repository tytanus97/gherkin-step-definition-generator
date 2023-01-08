import { DefinitionOutputState } from './definition-output.state';
import { createFeatureSelector } from '@ngrx/store';
export const DEFINITION_OUTPUT_STATE_NAME = 'definitionOutputState'

const definitionOutputState = createFeatureSelector<DefinitionOutputState>(DEFINITION_OUTPUT_STATE_NAME)

