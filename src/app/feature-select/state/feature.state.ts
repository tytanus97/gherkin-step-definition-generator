export interface FeatureState {
    featureFilePath: string,
    featureFileContent: string,
    featureFile: File
}

export const FEATURE_STATE_INITIAL: FeatureState = {
    featureFilePath: '',
    featureFileContent: '',
    featureFile: null
}