export interface FeatureState {
    featureFilePath: string,
    featureFileContent: string
}

export const FEATURE_STATE_INITIAL: FeatureState = {
    featureFilePath: '',
    featureFileContent: ''
}