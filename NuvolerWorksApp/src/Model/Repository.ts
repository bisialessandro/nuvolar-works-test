export class Repository{
    name:string;
    description:string;
    language:string;
    defaultBranch:string;


    constructor(name: string, description: string, language: string, defaultBranch: string) {
        this.name = name;
        this.description = description;
        this.language = language;
        this.defaultBranch = defaultBranch;
    }

    public toRepository(data: object[]) {
        const user: Array<Repository> = [];
        for (const d of data) {
            user.push(this.createRepository(d));
        }
        return  user;
    }

    public createRepository(repository:any){
        return new Repository(repository.name,repository.description,repository.language,repository.defaultBranch)

    }
}