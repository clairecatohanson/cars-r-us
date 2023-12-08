import { VehicleOptions } from './VehicleTypes.js'
import { PaintOptions } from './Paints.js'
import { InteriorOptions } from './Interiors.js'
import { WheelOptions } from './Wheels.js'
import { TechnologyOptions } from './Technologies.js'
import { OrderButtonHTML } from './OrderButton.js'
import { CustomOrderList } from './CustomOrders.js'


const render = async () => {
    const vehiclesHTML = await VehicleOptions()
    const paintsHTML = await PaintOptions()
    const interiorsHTML = await InteriorOptions()
    const wheelsHTML = await WheelOptions()
    const technologiesHTML = await TechnologyOptions()
    const buttonHTML = OrderButtonHTML()
    const ordersHTML = await CustomOrderList()
    
    let mainHTML = `
    <section id="order-form" class="block">
    <h2 class="block__heading">Personal Car Builder</h2>
    <div class="flex-container">
    <article class="block__card">
    ${vehiclesHTML}
    </article>
    <article class="block__card">
    ${paintsHTML}
    </article>
    <article class="block__card">
    ${interiorsHTML}
    </article>
    <article class="block__card">
    ${wheelsHTML}
    </article>
    <article class="block__card">
    ${technologiesHTML}
    </article>
    </div>
    ${buttonHTML}
    </section>
    <section id="custom-orders" class="block">
    <h2 class="block__heading">Custom Car Orders</h2>
    ${ordersHTML}
    </section>
    `
    
    const mainEl = document.querySelector('#container')
    mainEl.innerHTML = mainHTML
}

render()

document.addEventListener("customOrderSubmitted", render)