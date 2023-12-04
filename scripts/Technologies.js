import { setTechnologyOption } from './TransientState.js'

const handleTechnologySelection = (userDropdownSelection) => {
    if (userDropdownSelection.target.id === "technology-options") {
        const userSelection = parseInt(userDropdownSelection.target.value)
        setTechnologyOption(userSelection)
    }
}

export const TechnologyOptions = async () => {
    const response = await fetch('http://localhost:8088/technologies')
    const technologies = await response.json()

    document.addEventListener("change", handleTechnologySelection)

    let html = `
        <h3 class="card__heading">Technology Packages</h3>
        <label for="technology-options">Select your technology package:</label>
        <select id="technology-options" name="technology-options">
            <option value="0">Select...</option>
    `
    const technologyHtmlArray = technologies.map(technology => {
        return `<option value="${technology.id}">${technology.package}</option>`
    })

    html += technologyHtmlArray.join('')
    html += '</select>'

    return html
}