import request from "supertest"
import app from "../../../src/app";
import { DataSource } from "typeorm";
import { IUserRequest } from "../../interfaces/user";
import { AppDataSource } from "../../../src/data-source";
import { mockedContact, mockedUser, mockedUserLogin, userWithout } from "../../mock"

let connection: DataSource

describe("/contact", () => {

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

    // test("POST /contact -  should be able to create a contact", async () => {
    //     const loginResponse = await request(app).post("/session").send(mockedUserLogin);
    //     const user = await request(app).get('/user').set("Authorization", `Bearer ${loginResponse.body.token}`)
    //     mockedContact.userId = user.body.id

    //     const response = await request(app)
    //         .post("/contact")
    //         .set("Authorization", `Bearer ${loginResponse.body.token}`)
    //         .send(mockedContact);

    //     expect(response.body).toHaveProperty("message");
    //     expect(response.status).toBe(201);
    // })
    
})