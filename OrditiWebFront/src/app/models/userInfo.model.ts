export class UserInfoModel {
    guid: string;
    uid: string;

    name: string;

    email: string;
    local: string;

    produto: string;

    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}