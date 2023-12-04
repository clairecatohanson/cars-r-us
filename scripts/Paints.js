import { setPaintOption } from './TransientState.js'

const handlePaintSelection = (userDropdownSelection) => {
    const selectedDropdown = userDropdownSelection.target
    if (selectedDropdown.id==="paint-options") {
        const selectedItemValue = parseInt(selectedDropdown.value)
        setPaintOption(selectedItemValue)
    }
}

export const PaintOptions = async () => {
    const response = await fetch('http://localhost:8088/paints')
    const paints = await response.json()

    document.addEventListener("change", handlePaintSelection)

    let html = `
            <h3 class="card__heading">Paints</h3>
            <label for="paint-options">Select your paint:</label>
            <select id="paint-options" name="paint-options">
                <option value="0">Select...</option>
        `
    
    const paintHtmlArray = paints.map((paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
    })

    html += paintHtmlArray.join('')
    html += '</select>'

    return html
}