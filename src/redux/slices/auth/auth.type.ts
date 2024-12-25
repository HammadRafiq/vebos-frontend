export interface AuthState {
    isAuthenticated: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    userType: any;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  
  
  