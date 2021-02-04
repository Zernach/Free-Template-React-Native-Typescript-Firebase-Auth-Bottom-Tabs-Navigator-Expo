export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  AuthLoadingScreen: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  RegisterScreen: undefined;
};

export type AuthStackParamList = {
  AuthLoadingScreen: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  RegisterScreen: undefined;
};

export type BottomTabParamList = {
  TRAINING: undefined;
  HISTORY: undefined;
  PROFILE: undefined;
  PAY: undefined;
};

export type TabOneParamList = {
  TrainingScreen: undefined;
};

export type TabTwoParamList = {
  HistoryScreen: undefined;
};

export type TabThreeParamList = {
  ProfileScreen: undefined;
};

export type TabFourParamList = {
  PayScreen: undefined;
};

// RNF LogSignTemplate
export type Navigation = {
  navigate: (scene: string) => void;
};

// RNF LogSignTemplate
export type AuthDetails = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};
