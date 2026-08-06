// bill.js
document.getElementById("billForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form submission

    const watts = parseFloat(document.getElementById("watts").value);
    const hours = parseFloat(document.getElementById("hours").value);
    const costPerUnit = parseFloat(document.getElementById("cost").value);
    // const days = document.querySelector('input[name="days"]:checked');

    if (!watts || !hours || !costPerUnit) {
        alert("Please fill in all fields.");
        return;
    }

    const totalDays = 30;
    const energyConsumed = (watts * hours * totalDays) / 1000; // in kWh
    const totalCost = energyConsumed * costPerUnit;

    document.getElementById("result").textContent = 
      `Total Energy Used: ${energyConsumed.toFixed(2)} kWh, Total Bill: ₹${totalCost.toFixed(2)}`;
});