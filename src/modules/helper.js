import APIManager from './APIManager'

const handleFieldChange = (e, object, setObject) => {
    let stateToChage = {...object}
    stateToChage[e.target.id] = e.target.value
    setObject(stateToChage)
}

function clearActivities(userId) {
    APIManager.getAllUser(userId).then(user => {
        let obj = {}
        obj = user.entries[user.entries.length - 1]
        APIManager.deleteEntry(obj.id)
    })
}

export { handleFieldChange, clearActivities }