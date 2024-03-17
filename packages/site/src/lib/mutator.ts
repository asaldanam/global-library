import { MutatorCallback } from 'swr';

export async function mutator(url: string, options: Readonly<{ arg: never }>) {
  return fetch(url, { method: 'PUT', body: JSON.stringify(options) }).then((res) => res.json());
}
