export let users = [{
    id: 0,
    email: "lsm001005@naver.com",
    statement: "Lee Su Min",
    username: "2sumin2",
    password: "2sumin2"
},
{
    id: 1,
    email: "2019212989@naver.com",
    statement: "Lee Su Min",
    username: "3sumin3",
    password: "3sumin3"
}];

export const getUsers = () => users;

export const deleteUser = (username) => {
    const cleandUsers = users.filter(user => user.username !== username);
    if (users.length > cleandUsers.length) {
        users = cleandUsers;
        return true;
    } else {
        return false;
    }
};
const findLastId = () => {
    return users[users.length - 1].id;
};

export const addUser = (email, statement, username, password) => {
    const newUser = {
        id: findLastId() + 1,
        email,
        statement,
        username,
        password
    };
    users.push(newUser);
    return newUser;
};