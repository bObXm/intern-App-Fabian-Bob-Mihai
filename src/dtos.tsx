export type Gender = 'female' | 'male' | '';

export type User = {
  gender: Gender;
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
};

export interface CRUDUser {
  id: number;
  name: string;
  email: string;
}