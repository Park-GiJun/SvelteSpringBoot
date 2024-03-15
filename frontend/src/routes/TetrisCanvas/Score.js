import { writable} from 'svelte/store';

/** @type Writable<number> **/
export let score = writable(0);