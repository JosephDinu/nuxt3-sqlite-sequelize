import { UserModel } from "../../models/user"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    await UserModel.destroy({
        where: {
            id: body.id
        }
    });

    return `delete user id: ${body.id}`
})
