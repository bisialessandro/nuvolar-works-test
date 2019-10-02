export class UserGitHub {

    private _login: string;
    private _id: number;
    private _node_id: string;
    private _avatar_url: string;
    private _gravatar_id: string;
    private _url: string;
    private _html_url: string;
    private _followers_url: string;
    private _following_url: string;
    private _gists_url: string;
    private _starred_url: string;
    private _subscriptions_url: string;
    private _organizations_url: string;
    private _repos_url: string;
    private _events_url: string;
    private _received_events_url:string;
    private _type: string;
    private _site_admin: boolean;
    private _score:number;


    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    setLogin(value: string):UserGitHub {
        this._login = value;

        return this;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    setId(value: number):UserGitHub {
        this._id = value;
        return this;
    }

    get node_id(): string {
        return this._node_id;
    }

    set node_id(value: string) {
        this._node_id = value;
    }

    setNode_id(value: string):UserGitHub {
        this._node_id = value;

        return this;
    }

    get avatar_url(): string {
        return this._avatar_url;
    }


    set avatar_url(value: string) {
        this._avatar_url = value;
    }


    setAvatar_url(value: string):UserGitHub {
        this._avatar_url = value;

        return this;
    }

    get gravatar_id(): string {
        return this._gravatar_id;
    }

    set gravatar_id(value: string) {
        this._gravatar_id = value;
    }

    setGravatar_id(value: string):UserGitHub {
        this._gravatar_id = value;

        return this;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    setUrl(value: string):UserGitHub {
        this._url = value;

        return this;
    }

    get html_url(): string {
        return this._html_url;
    }

    set html_url(value: string) {
        this._html_url = value;
    }

    setHtml_url(value: string):UserGitHub {
        this._html_url = value;

        return this;
    }

    get followers_url(): string {
        return this._followers_url;
    }

    set followers_url(value: string) {
        this._followers_url = value;
    }

    setFollowers_url(value: string):UserGitHub {
        this._followers_url = value;
        return this;
    }

    get following_url(): string {
        return this._following_url;
    }

    set following_url(value: string) {
        this._following_url = value;
    }

    setFollowing_url(value: string) :UserGitHub{
        this._following_url = value;

        return this;
    }

    get gists_url(): string {
        return this._gists_url;
    }

    set gists_url(value: string) {
        this._gists_url = value;
    }

    setGists_url(value: string):UserGitHub {
        this._gists_url = value;
        return this;
    }

    get starred_url(): string {
        return this._starred_url;
    }

    set starred_url(value: string) {
        this._starred_url = value;
    }

    setStarred_url(value: string):UserGitHub {
        this._starred_url = value;
        return this;
    }

    get subscriptions_url(): string {
        return this._subscriptions_url;
    }

    set subscriptions_url(value: string) {
        this._subscriptions_url = value;
    }

    setSubscriptions_url(value: string):UserGitHub {
        this._subscriptions_url = value;

        return this;
    }

    get organizations_url(): string {
        return this._organizations_url;
    }

    set organizations_url(value: string) {
        this._organizations_url = value;
    }

    setOrganizations_url(value: string):UserGitHub {
        this._organizations_url = value;

        return this;
    }

    get repos_url(): string {
        return this._repos_url;
    }

    set repos_url(value: string) {
        this._repos_url = value;
    }

    setRepos_url(value: string):UserGitHub {
        this._repos_url = value;
        return this;
    }

    get events_url(): string {
        return this._events_url;
    }

    set events_url(value: string) {
        this._events_url = value;
    }

    setEvents_url(value: string) :UserGitHub{
        this._events_url = value;
        return this;
    }

    get received_events_url(): string {
        return this._received_events_url;
    }

    set received_events_url(value: string) {
        this._received_events_url = value;
    }

    setReceived_events_url(value: string):UserGitHub {
        this._received_events_url = value;
        return this;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    setType(value: string):UserGitHub  {
        this._type = value;
        return this;
    }

    get site_admin(): boolean {
        return this._site_admin;
    }

    set site_admin(value: boolean) {
        this._site_admin = value;
    }

    setSite_admin(value: boolean):UserGitHub  {
        this._site_admin = value;
        return this;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    setScore(value: number) :UserGitHub {
        this._score = value;
        return this;
    }

    constructor(login: string, id: number, node_id: string, avatar_url: string, gravatar_id: string, url: string, html_url: string, followers_url: string, following_url: string, gists_url: string, starred_url: string, subscriptions_url: string, organizations_url: string, repos_url: string, events_url: string, received_events_url: string, type: string, site_admin: boolean, score: number) {
        this._login = login;
        this._id = id;
        this._node_id = node_id;
        this._avatar_url = avatar_url;
        this._gravatar_id = gravatar_id;
        this._url = url;
        this._html_url = html_url;
        this._followers_url = followers_url;
        this._following_url = following_url;
        this._gists_url = gists_url;
        this._starred_url = starred_url;
        this._subscriptions_url = subscriptions_url;
        this._organizations_url = organizations_url;
        this._repos_url = repos_url;
        this._events_url = events_url;
        this._received_events_url = received_events_url;
        this._type = type;
        this._site_admin = site_admin;
        this._score = score;
    }


    public toUser(data: object[]) {
        const user: UserGitHub[] = [];
        for (const d of data) {
            user.push(this.createUser(d));
        }
        return  user;
    }

    // tslint:disable-next-line
    private createUser(user: any) {
        return new UserGitHub(user.login,
            user.id,
            user.node_id,
            user.avatar_url,
            user.gravatar_id,
            user.url,
            user.html_url,
            user.followers_url,
            user.following_url,
            user.gists_url,
            user.starred_url,
            user.subscriptions_url,
            user.organizations_url,
            user.repos_url,
            user.events_url,
            user.received_events_url,
            user.type,
            user.site_admin,
            user.score);
    }


}