export const people = [{
    id: 0,
    name: "sumin",
    age: 23,
    gender: "female"
},
{
    id: 1,
    name: "sumin",
    age: 23,
    gender: "female"
},
{
    id: 2,
    name: "sumin",
    age: 23,
    gender: "female"
},
{
    id: 3,
    name: "sumin",
    age: 23,
    gender: "female"
}];

export const getById = id => {
    const filterdPeople = people.filter(person => person.id === id);
    return filterdPeople[0];
}