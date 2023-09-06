export type LoginUserType = {
  email: string;
  password: string;
};

export type UserFormType = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

export type UserUpdateType = {
  fullName: string;
  avatar: string | File | null;
  password?: string;
};
