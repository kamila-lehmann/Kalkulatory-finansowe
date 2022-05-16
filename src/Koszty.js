/* Kalkulator Kosztów Uzyskania Przychodu */

const Koszty = () => {
  function calculateCosts() {
    const inv_entry = document.getElementById("inv_entry");
    const goods = document.getElementById("goods");
    const side_costs = document.getElementById("side_costs");
    const inv_end = document.getElementById("inv_end");
    const other_costs = document.getElementById("other_costs");
    const wages = document.getElementById("wages");
    const total_costs = document.getElementById("total_costs");
    // Calculate the amount of tax deductible expenses
    total_costs.value = (
      +inv_entry.value +
      +goods.value +
      +side_costs.value -
      +inv_end.value +
      +other_costs.value -
      +wages.value
    ).toFixed(2);
  }

  // Call the calculateCosts function on button click

  return (
    <div className="calc-costs" id="calc-costs">
      <h2>Kalkulator kosztów uzyskania przychodu</h2>
      <form
        action="index.html"
        method="post"
        name="calculator_costs"
        className="form_3"
      >
        <div className="inv_entry_section">
          <label htmlFor="inv_entry">
            Wartość spisu z natury na początek roku:
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="inv_entry"
            name="inv_entry"
            required
            autoComplete="off"
          />
        </div>
        <div className="goods_section">
          <label htmlFor="goods">Wydatki na zakup towarów</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="goods"
            name="goods"
            required
            autoComplete="off"
          />
        </div>
        <div className="side_costs_section">
          <label htmlFor="side_costs">Wydatki na koszty uboczne zakupu:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="side_costs"
            name="side_costs"
            required
            autoComplete="off"
          />
        </div>
        <div className="inv_end_section">
          <label htmlFor="inv_end">
            Wartość spisu z natury na koniec roku:
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="inv_end"
            name="inv_end"
            required
            autoComplete="off"
          />
        </div>
        <div className="other_costs_section">
          <label htmlFor="other_costs">Kwota pozostałych wydaktów:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="other_costs"
            name="other_costs"
            required
            autoComplete="off"
          />
        </div>
        <div className="wages_section">
          <label htmlFor="wages">
            Wartość wynagrodzeń w naturze ujętych w innych kolumnach:
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="wages"
            name="wages"
            required
            autoComplete="off"
          />
        </div>
        <div className="oblicz">
          <button
            type="button"
            id="oblicz_wynagrodzenie"
            name="oblicz_wynagrodzenie"
            onClick={() => calculateCosts()}
          >
            Oblicz
          </button>
        </div>
      </form>
      <div className="total_costs_section">
        <label htmlFor="total_costs">Razem koszty:</label>
        <input type="number" id="total_costs" name="total_costs" readOnly />
      </div>
    </div>
  );
};

export default Koszty;
