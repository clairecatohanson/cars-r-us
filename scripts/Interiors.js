import { setInteriorOption } from './TransientState.js'

const handleInteriorSelection = (userDropdownSelection) => {
    if (userDropdownSelection.target.id === "interior-options") {
        const selectedItemValue = parseInt(userDropdownSelection.target.value)
        setInteriorOption(selectedItemValue)
    }
}

export const InteriorOptions = async () => {
    const response = await fetch('http://localhost:8088/interiors')
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorSelection)

    let html = `
            <h3 class="card__heading">Interiors</h3>
            <label for="interior-options">Select your interior:</label>
            <select id="interior-options" name="interior-options">
                <option value="0">Select...</option>
        `
    const interiorHtmlArray = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.material}</option>`
    })

    html += interiorHtmlArray.join('')
    html += `</select>`

    return html
}