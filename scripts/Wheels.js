import { setWheelOption } from './TransientState.js'

const handleWheelSelection = (userDropdownSelection) => {
    if (userDropdownSelection.target.id === "wheel-options") {
        const selectedItem = parseInt(userDropdownSelection.target.value)
        setWheelOption(selectedItem)
    }
}

export const WheelOptions = async () => {
    const response = await fetch('http://localhost:8088/wheels')
    const wheels = await response.json()

    document.addEventListener("change", handleWheelSelection)

    let html = `
        <h3 class="card__heading">Wheels</h3>
        <label for="wheel-options">Select your wheels:</label>
        <select id="wheel-options" name="wheel-options">
            <option value="0">Select...</option>
    `
    const wheelHtmlArray = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.wheel}</option>`
    })
    html += wheelHtmlArray.join('')
    html += '</select>'

    return html
}