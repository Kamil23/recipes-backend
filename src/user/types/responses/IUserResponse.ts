import { IUserDetails } from '../IUserDetails';

export interface IUserResponse {
  user_uuid: string;
  email: string;
  name: string;
  userDetails: IUserDetails;
}
