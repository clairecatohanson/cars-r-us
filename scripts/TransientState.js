const transientState = {
    paintId: 0,
    interiorId: 0,
    wheelId: 0,
    technologyId: 0,
}

export const setPaintOption = (userSelection) => {
    transientState.paintId = userSelection
    console.log(transientState)
}

export const setInteriorOption = (userSelection) => {
    transientState.interiorId = userSelection
    console.log(transientState)
}

export const setWheelOption = (userSelection) => {
    transientState.wheelId = userSelection
    console.log(transientState)
}

export const setTechnologyOption = (userSelection) => {
    transientState.technologyId = userSelection
    console.log(transientState)
}

export const postToAPI = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch('http://localhost:8088/customOrders', postOptions)
    console.log('order sent')

    const customEvent = new CustomEvent('customOrderSubmitted')
    document.dispatchEvent(customEvent)
}