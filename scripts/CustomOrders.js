export const CustomOrderList = async () => {
    const response = await fetch('http://localhost:8088/customOrders?_expand=paint&_expand=interior&_expand=wheel&_expand=technology')
    const customOrders = await response.json()
    
    let html = ''
    for (const order of customOrders) {
        const cost = order.paint.cost + order.interior.cost + order.wheel.cost + order.technology.cost
        html += `
            <article class="block__item">
                <span class="bold">Order #${order.id}:</span> ${order.paint.color} car with ${order.wheel.wheel} wheels, ${order.interior.material} interior, and the ${order.technology.package}, for a total cost of ${cost.toLocaleString("en-US", {style: "currency", currency : "USD"})}.
            </article>
        `
    }

    return html
}
