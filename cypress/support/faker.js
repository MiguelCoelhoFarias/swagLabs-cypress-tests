import { faker } from '@faker-js/faker'


export const getUserValid = () => {
    return {
        userName: faker.person.firstName(),
        password: faker.internet.password()
    }
}

export const getUserInformationForBuy = () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        zipCode: faker.location.zipCode()
    }
}

