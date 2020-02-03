export class ProfileModel {
  id: string;
  name: string;
  eapconfig_endpoint: string;
  oauth: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.eapconfig_endpoint = '';
    this.oauth = false;
  }
}
