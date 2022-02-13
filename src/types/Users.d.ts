interface User {
  _id: string;
  username: string;
  fullname: string;
  password: string;
  isCheckin: boolean;
  isOnline: boolean;
  survey?: any;
  role?: string;
  status?: number;
}
