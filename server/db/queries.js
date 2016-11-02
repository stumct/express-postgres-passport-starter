import db from './index'

export const create_user = (email, password) => db.one("INSERT INTO users (email, password) VALUES($1, $2) returning userid, email", [email, password])
export const get_users = () => db.query("SELECT * FROM users")
export const get_user_from_userid = (id) => db.one("SELECT userid, password, email FROM users WHERE userid = $1", id)
export const get_user_from_email = (email) => db.one("SELECT userid, password, email FROM users WHERE email = $1", email)
export const check_user_exists = (email) => db.query("SELECT 1 FROM users WHERE email = $1", email)
