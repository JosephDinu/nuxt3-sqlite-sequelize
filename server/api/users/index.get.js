import { UserModel } from "../../models/user"

export default defineEventHandler(async (event) => {
    const users = await UserModel.findAll();
    return users
})
