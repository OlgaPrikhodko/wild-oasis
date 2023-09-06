export type LoginUserType = {
  email: string;
  password: string;
};

export type UserPasswordType = {
  password: string;
  passwordConfirm?: string;
};

export type UserFormType = {
  fullName: string;
  email: string;
} & UserPasswordType;

export type UserUpdateType = {
  fullName?: string;
  avatar?: string | File | null;
  password?: string;
};
