

export class EditProfileReq {
  id: string;
  profile?: string;
  name?: string;
  email?: string;
  mobile?: string;
  company?: string;
  siteUrl?: string;
  address?: string;
}

export class ProfileRes {
  id: string;
  profile?: string;
  name?: string;
  email?: string;
  mobile?: string;
  company?: string;
  siteUrl?: string;
  address?: string;
}
