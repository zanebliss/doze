import APIManager from './APIManager'

const handleFieldChange = (e, object, setObject) => {
    let stateToChage = {...object}
    stateToChage[e.target.id] = e.target.value
    setObject(stateToChage)
}

function clearActivities(id) {
    let obj = {}
    APIManager.getAllUser(id).then(user => {
        obj = user.entries[user.entries.length - 1]
    }).then(
        APIManager.deleteEntry(obj.id)
    )
}

export { handleFieldChange, clearActivities }