import faker from 'faker/locale/pt_BR';

async function createTest() {
    const body = {
        name: faker.random.word(),
        category: faker.datatype.number({
            min: 1,
            max: 5,
        }),
        subject: faker.datatype.number({
            min: 1,
            max: 10,
        }),
        professor: faker.datatype.number({
            min: 1,
            max: 3,
        }),
        pdfLink: `${faker.internet.url()}.pdf`,
    };
    return body;
}

export {
    createTest,
};
