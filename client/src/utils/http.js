export const post = (url, data) => fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(res => res.json()).catch(e => console.log(e))

export const patch = (url, data) => fetch(url, {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(res => res.json()).catch(e => console.log(e))

export const get = (url) => fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}).then(res => res.json()).catch(e => console.log(e))
