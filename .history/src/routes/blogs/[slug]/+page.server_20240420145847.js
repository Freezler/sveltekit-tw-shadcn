import { error } from '@sveltejs/kit';
async function load({ params }) {
async function load({ params }: { params: { slug: string } }) {
