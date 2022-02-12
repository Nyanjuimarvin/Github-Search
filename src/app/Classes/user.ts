export class User {
    constructor(public photoUrl: string,
                public bioMessage: string,
                public repoUrl: string,
                public userName: string,
                public repoNumber: number,
                public dateJoined?: Date) { }
                
}
