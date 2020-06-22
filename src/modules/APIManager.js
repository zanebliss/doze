const remoteURL = 'http://localhost:8088'

export default {
    getUser(username, password) {
      return fetch(`${remoteURL}/users?username=${username}&password=${password}`).then(e => e.json())
    },
    getAllUser(id) {
      return fetch(`${remoteURL}/users/${id}/?_embed=entries`).then(e => e.json())
    },
    getEntry(userId, id) {
      return fetch(`${remoteURL}/entries?userId=${userId}&id=${id}`).then(e => e.json())
    },
    deleteEntry(id) {
      return fetch(`${remoteURL}/entries/${id}`, {
        method: "DELETE",
      }).then((result) => result.json());
    },
    getSortedEntries(key, order) {
      return fetch(`${remoteURL}/entries?_sort=${key}&_order=${order}`).then(e => e.json())
    },
    getSavedEntries(key, order) {
      return fetch(`${remoteURL}/entries?_sort=${key}&_order=${order}&saved=true`).then(e => e.json())
    },
    post(resource, obj) {
        return fetch(`${remoteURL}/${resource}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }).then((data) => data.json()); 
    },
    edit(resource, obj) {
      return fetch(`${remoteURL}/${resource}/${obj.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(data => data.json());
  },
 }