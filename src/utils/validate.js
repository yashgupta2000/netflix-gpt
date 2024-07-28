export const checkValidate = (email, password,name) => {
    const isEmail = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/.test(email);
    const isPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    // const isName = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name)

    if (!isEmail) return 'Email is not valid'
    if (!isPassword) return 'Password is not valid'
    // if (!isName) return 'Name is not valid'

    return null;
}