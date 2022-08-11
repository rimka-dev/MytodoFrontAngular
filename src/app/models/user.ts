export class User {
    public username: string;
    public adress: string;
    public ville: string;
    public cp: string;
    public email: string;
    public password : string;

    constructor(username: string, adress: string, ville: string, cp: string, email: string, password : string ){
        this.username = username;
        this.adress = adress;
        this.ville = ville;
        this.cp = cp;
        this.email = email;
        this.password = password;
    }
}
