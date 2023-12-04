import { postToAPI } from './TransientState.js'

const handleOrderButtonClick = (clickEvent) => {
    if (clickEvent.target.id==="button__order") {
        postToAPI()
    }
}

export const OrderButtonHTML = () => {
    document.addEventListener("click", handleOrderButtonClick)
    return `<button id="button__order">Place Custom Car Order</button>`
}