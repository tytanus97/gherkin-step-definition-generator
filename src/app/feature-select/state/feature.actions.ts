import { createAction, props } from "@ngrx/store"

const loadFeatureFileName = 'load_feature_file'

export const loadFeatureFile = createAction(loadFeatureFileName, props<{ featureFile: File, featureFilePath: string, featureFileContent: string }>())