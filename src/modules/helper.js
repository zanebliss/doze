const handleFieldChange = (e, object, setObject) => {
    let stateToChage = {...object}
    stateToChage[e.target.id] = e.target.value
    setObject(stateToChage)
}

export { handleFieldChange }