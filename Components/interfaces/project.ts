export interface PostProps {
  userId: number;
  id: number;
  tile: string;
  body: string;
}

export interface UserProps {
  id: number,
  name: string,
  username: string,
  email: string,
  address: object,
  phone: string,
  website: string,
  company: object
}
