import { UserModel } from "../../models/user"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const jane = await UserModel.create({ firstName: body.firstName, lastName: body.lastName, email: body.email});
    return `Jane's auto-generated ID: ${jane.id}`
})
