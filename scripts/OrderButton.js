import { postToAPI } from './TransientState.js'

document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id==="button__order") {
        postToAPI()
    }
})

export const OrderButtonHTML = () => {
    const html = `
        <button id="button__order">Place Custom Car Order</button>
    `
    return html
}