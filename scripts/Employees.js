import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    e => {
        const targetClicked = e.target
        if (targetClicked.id.startsWith("employee")) {
            const [,employeeId] = targetClicked.id.split("--")

            const matchingEmployee = employees.find(employee => employee.id === parseInt(employeeId))
            //Now we have the employee's ID.
            //Set a variable to 0 and iterate through orders, increasing by 1 for 
            //every matching order to the ID
            
            let orderAmount = 0
            for (const order of orders) {
                if (order.employeeId === parseInt(employeeId)) orderAmount++
            }
            window.alert(`${matchingEmployee.name} sold ${orderAmount} products`)
        }
    }
)
