import { get_users } from '../db/queries'

export default (router) => {
    router.get('/', (req, res) => {
        get_users()
            .then((user) => {
                console.log(user); // print user name;
                res.send(user);
            })
            .catch((error) => {
                console.log(error); // print why failed;
                res.send(error);
            });
    });
}
