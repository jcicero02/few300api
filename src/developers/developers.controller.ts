import { Controller, Get } from '@nestjs/common';

@Controller('developers')
export class DevelopersController {

    database: Developer[] = [
        { id: '1', firstName: 'Ben', lastName: 'Hedrick', team: 'boss' },
        { id: '2', firstName: 'Jesse', lastName: 'Taylor', team: 'Quoting' },
    ];

    @Get()
    getDevelopers() {
        return { data: this.database };
    }

}

interface Developer {
    id: string;
    firstName: string;
    lastName: string;
    team: string;
}