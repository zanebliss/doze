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
    getSortedEntries(userId, key, order) {
      return fetch(`${remoteURL}/entries/?userId=${userId}&_sort=${key}&_order=${order}&isSaved=true`).then(e => e.json())
    },
    getSavedEntries(userId) {
      return fetch(`${remoteURL}/entries/?userId=${userId}&_sort=id&_order=desc&isSaved=true`).then(e => e.json())
    },
    getMetrics(userId) {
      return fetch(`${remoteURL}/entries?userId=${userId}&isSaved=true&_sort=id&_order=desc`).then(e => e.json())
    },
    getFactors(userId, result) {
      return fetch(`${remoteURL}/entries?userId=${userId}&isSaved=true&result=${result}`).then(e => e.json())
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