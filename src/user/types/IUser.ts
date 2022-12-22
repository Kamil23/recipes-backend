import { IUserDetails } from './IUserDetails';

export interface IUser {
  user_uuid: string;
  email: string;
  password: string;
  user_details?: IUserDetails;
  created_at: string;
}
