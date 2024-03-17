export async function fetcher(resource: any, init: any) {
  return fetch(resource, init).then((res) => res.json());
}
