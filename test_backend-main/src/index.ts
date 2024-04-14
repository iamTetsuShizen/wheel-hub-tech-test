import 'reflect-metadata';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createHash } = require('node:crypto');

import { DataSource } from "typeorm";
import { User } from './entity/User';

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./data/wheelhub.db",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

AppDataSource.initialize()
    .then( async () => {
        //API endpoint
        app.post('/api/users', async ( req: any, res: any ) => {
            // info for the test purposes: this deconstruction already takes out from the body irrelevant info
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ 
                    message: 'Username and password are required.'
                });
            }
            //check if that name already exists
            const userRepository = AppDataSource.getRepository(User);
            const userFind = await userRepository.findBy({
                username: username
            });
            console.log(userFind);

            if (userFind.length > 0) {
                return res.status(400).json({ 
                    message: 'Username already exists. Please choose a different one.'
                });
            }

            // If not, we create it
            const newUser = new User();
            newUser.username = username;
            newUser.password = createHash('sha256').update(password).digest('hex');

            userRepository.save(newUser);

            res.status(201).json({
                status: 200,
                message: "El usuario se creó correctamente"
            });
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });


// start the Express server
const PORT = 8080;
app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );