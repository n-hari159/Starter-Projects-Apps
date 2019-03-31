import axios from 'axios';

async function getResults(query) {
    const proxy ='https://cors-anywhere.herokuapp.com/';
    const key = '3ed73f04475c8a642ef6fdf07476f9d9';
    try {
    const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
    } catch(error) {
        alert(error);
    }
}
getResults('pizza');