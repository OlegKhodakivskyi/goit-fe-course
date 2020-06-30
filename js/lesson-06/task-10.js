import {default as users} from "./users.js";

const getSortedUniqueSkills = (users) => {
const result = users
    .reduce((acc, user) => {
        acc.push(...user.skills);
        return acc;
    }, [])
    .sort();
    return result.filter((skill, index) => {
    return index === result.indexOf(skill);
    });
};


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 
// 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


// Получить массив всех умений всех пользователей (поле skills), при этом не должно
// быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.



// ========================================================================
// const getSortedUniqueSkills = (users) => {
//     const result = users
//         .reduce((acc, user) => {
//             acc.push(...user.skills);
//             return acc;
//         }, [])
//         .sort()
//         .filter((skill, index, skills) => skill !== skills[index - 1]);
//     return result;
// };
// ========================================================================

