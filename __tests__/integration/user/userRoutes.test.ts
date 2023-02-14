import request from "supertest"
import app from "../../../src/app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../src/data-source";
import { mockedUser, mockedUserLogin, userWithout } from "../../mock"
import { IUserRequest } from "../../interfaces/user";

let connection: DataSource

describe("/user", () => {

    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })


    afterAll(async () => {

        await connection.destroy()
    })

    test("POST /user -  Must be able to create a user", async () => {
        const response = await request(app).post('/user').send(mockedUser)

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("isActive")
        expect(response.body).toHaveProperty("createdAt")
        expect(response.body).toHaveProperty("updatedAt")
        expect(response.body).not.toHaveProperty("password")
        expect(response.body.name).toEqual("Flavinho do pneu")
        expect(response.body.email).toEqual("flavinho@email.com")
        expect(response.body.isActive).toEqual(true)
        expect(response.status).toBe(201)
    })

    test("GET /user -  must be able to list users", async () => {
        const loginResponse = await request(app).post("/session").send(mockedUserLogin);
        const response = await request(app).get('/user').set("Authorization", `Bearer ${loginResponse.body.token}`)

        const body = response.body as IUserRequest
        expect(response.body).toHaveLength(1)
        expect(body).not.toHaveProperty("password")
    })

    test("GET /user -  should not be able to list itself ", async () => {
        const loginResponse = await request(app).post("/session").send(mockedUserLogin);
        const response = await request(app).get('/user/self').set("Authorization", `Bearer ${loginResponse.body.token}`)

        const body = response.body as IUserRequest
        expect(typeof body).toBe("object")
        expect(response.status).toBe(200)
        expect(body).not.toHaveProperty("password")
    })

    test("GET /user -  should not be able to list users without authentication", async () => {
        const response = await request(app).get('/user')

        const body = response.body as IUserRequest
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
        expect(body).not.toHaveProperty("password")
    })

    test("GET /user -  should not be able to list itself without authentication", async () => {
        const response = await request(app).get('/user/self')

        const body = response.body as IUserRequest
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
        expect(body).not.toHaveProperty("password")
    })

    test("POST /user -  should not to be able a creation of user using the same email", async () => {
        const response = await request(app).post('/user').send(mockedUser)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
    })

    test("POST /user -  should not to be able a creation of user without fields", async () => {
        const response = await request(app).post('/user').send(userWithout)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
    })

    test("DELETE /user -  must be able to soft delete user", async () => {
        await request(app).post('/users').send(mockedUser)

        const loginResponse = await request(app).post("/session").send(mockedUserLogin);
        const response = await request(app).delete("/user").set("Authorization", `Bearer ${loginResponse.body.token}`)
        const findUser = await request(app).get('/user').set("Authorization", `Bearer ${loginResponse.body.token}`)
        expect(response.status).toBe(204)
        expect(findUser.body[0].isActive).toBe(false)
    })

    test("DELETE /user -  should not to be delete an user already deleted", async () => {

        const loginResponse = await request(app).post("/session").send(mockedUserLogin);
        const response = await request(app).delete("/user").set("Authorization", `Bearer ${loginResponse.body.token}`)
        expect(response.statusCode).toBe(404)
    })
})