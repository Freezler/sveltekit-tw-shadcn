import { error } from '@sveltejs/kit';
const data = await fetch('./data.json').then((r) => r.json());
// const data = JSON.parse('./data.json);