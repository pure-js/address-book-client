// import * as db from '$lib/database';
import * as jsonData from './index';
// import type { RequestHandler } from '@sveltejs/kit';

db.get('mittens').then(function (doc) {
  // okay, doc contains our document
}).catch(function (err) {
  // oh noes! we got an error
});

/** @type {import('./__types/items').RequestHandler} */
export async function get() {
  const contacts = await db.list();

  if (contacts) {
    return {
      body: { contacts }
    };
  }

  return {
    status: 404
  };
}

// export function get() {
// 	const contacts = jsonData;

// 	if (contacts) {
// 		return {
// 			body: { contacts }
// 		};
// 	}

// 	return {
// 		status: 404
// 	};
// }
