
import User from './user.model';

export default class Feed {
    constructor(
        public id: string,
        public user: User,
        public content: string,
        public imageLink: string,
        public date: string) { }
}
