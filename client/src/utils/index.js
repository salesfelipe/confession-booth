export const post = (url, data) => fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(res => res.json()).catch(e => console.log(e))
