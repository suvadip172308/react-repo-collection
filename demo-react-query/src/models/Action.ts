
export interface UserDetailsPayload {
  id: string;
}

export interface Action {
  type: string;
  payload?: UserDetailsPayload;
}

export interface ActionProps {
  onAction: (type: Action) => void;
}