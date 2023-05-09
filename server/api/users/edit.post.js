import { UserModel } from "../../models/user"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    await UserModel.update({ 
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email 
    }, {
        where: { id: body.id }
    });
    
    const user = await UserModel.findAll({
        where: {
            id: body.id,
        }
    })

    return user
})
