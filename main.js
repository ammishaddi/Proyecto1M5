const listaPedidos = document.getElementById('listaPedidos');
const botoncito = document.getElementById('botoncito');


let orderId = 1; 


botoncito.addEventListener('click', () => {


    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    listaPedidos.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}



async function processOrder(order) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    updateOrderStatus(order, 'Completado');
}