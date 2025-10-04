import { Faker } from "@faker-js/faker";

export function generateRandomName() {
    return faker.person.fullName();
}

export function generateRandomEmail() {
    return faker.internet.email();
}