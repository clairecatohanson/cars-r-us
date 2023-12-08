import { setVehicleOption } from './TransientState.js'

const handleVehicleSelection = (userDropdownSelection) => {
    const selectedDropdown = userDropdownSelection.target
    if (selectedDropdown.id==="vehicle-options") {
        const selectedItemValue = parseInt(selectedDropdown.value)
        setVehicleOption(selectedItemValue)
    }
}

export const VehicleOptions = async () => {
    const response = await fetch('http://localhost:8088/vehicleTypes')
    const vehicleTypes = await response.json()

    document.addEventListener("change", handleVehicleSelection)

    let html = `
            <h3 class="card__heading">Vehicle Types</h3>
            <label for="vehicle-options">Select your vehicle type:</label>
            <select id="vehicle-options" name="vehicle-options">
                <option value="0">Select...</option>
        `
    
    const vehicleHtmlArray = vehicleTypes.map((vehicle) => {
        return `<option value="${vehicle.id}">${vehicle.type}</option>`
    })

    html += vehicleHtmlArray.join('')
    html += '</select>'

    return html
}