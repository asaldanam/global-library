import { MutatorCallback } from 'swr';

export async function mutator(url: string, params: { arg: any }) {
  return fetch(url, { method: 'PUT', body: JSON.stringify(params.arg) }).then((res) => res.json());
}
