import { Controller, Get } from '@nestjs/common';

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
            }, 3000);
        });
    }

}

interface Developer {
    id: string;
    firstName: string;
    lastName: string;
    team: string;
}
