export const fetcher = async (...args) => {
  const resp = await fetch(...args)
  return resp.json();
}

