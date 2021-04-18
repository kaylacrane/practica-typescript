export class Email{
    private _emailAddress: string;
    private _emailType: string;
    constructor(emailInput: [string, string]
    ) {
        this._emailAddress = emailInput[0];
        this._emailType = emailInput[1];
    }
}