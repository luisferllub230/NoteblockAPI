import bcrypt from 'bcrypt';

const comparePassword = async (password, hash) => {
    return  await bcrypt.compareSync(password, hash);
};

const encryptPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
};

export default {
    comparePassword,
    encryptPassword,
};