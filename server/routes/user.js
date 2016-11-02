import { get_user_from_userid } from '../db/queries'

export default (router) => {

    router.get('/:id', (req, res) => {
        get_user_from_userid(req.params.id)
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
