import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { DeveloperRequest } from './DeveloperRequest';
import * as cuid from 'cuid';
import { DeveloperResponse } from './DeveloperResponse';

@Controller('developers')
export class DevelopersController {

    database: Developer[] = [
        { id: '1', firstName: 'Ben', lastName: 'Hedrick', team: 'Boss' },
        { id: '2', firstName: 'Jesse', lastName: 'Taylor', team: 'Quoting' },
        { id: '3', firstName: 'Zac', lastName: 'Adams', team: 'ERO' }
    ];

    @Get()
    async getDevelopers() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: this.database });
            }, 0);
        });
    }

    @Post()
    async addDeveloper(@Body() dev: DeveloperRequest, @Res() res: Response) {
        if (dev.firstName === 'darth') {
            res.status(HttpStatus.BAD_REQUEST).send();
        } else {
            const newId = cuid();
            const response = new DeveloperResponse();
            response.id = newId;
            response.firstName = dev.firstName;
            response.lastName = dev.lastName;
            response.team = dev.team;
            this.database.push(response);
            res.status(HttpStatus.CREATED).send(response);
        }
    }
}

interface Developer {
    id: string;
    firstName: string;
    lastName: string;
    team: string;
}
