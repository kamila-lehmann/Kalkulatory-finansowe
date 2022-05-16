/* Kalkulator Wynagrodzeń */

const Wynagrodzenia = () => {
  //const button_salary = document.getElementById("oblicz_wynagrodzenie");

  function calculateSalary() {
    const wynagrodzenie_brutto = document.getElementById("wynagrodzenie");
    const wynagrodzenie_netto = document.getElementById("wynagrodzenie_netto");
    const ulga_podatkowa = document.getElementById("ulga_podatkowa");
    const ulga_klasa = document.getElementById("ulga_klasa");
    const kup = document.getElementById("kup");
    const wiek = document.getElementById("wiek");
    const wynagrodzenie = wynagrodzenie_brutto.value;

    // Calculate social security contributions
    const skladki_zus = (wynagrodzenie * 0.1371).toFixed(2);
    // Calculate health insurance contribution
    const podstawa_zdrow = wynagrodzenie - skladki_zus;
    const skladka_zdrow = (podstawa_zdrow * 0.09).toFixed(2);

    let ulga_podatkowa_kwota;
    let kup_kwota;
    let ulga_klasa_kwota;
    let zaliczka_podatkowa;

    // Calculate the amount of tax relief
    if (ulga_podatkowa.checked) {
      ulga_podatkowa_kwota = 425;
    } else {
      ulga_podatkowa_kwota = 0;
    }

    // Calculate the amount of tax relief for middle class (salary between 5.701 PLN and 11.141 PLN)
    if (ulga_klasa.checked && wynagrodzenie >= 5701 && wynagrodzenie <= 8549) {
      ulga_klasa_kwota = (
        ((wynagrodzenie * 6.68).toFixed(2) - 380, 50) / 0.17
      ).toFixed(2);
    } else if (
      ulga_klasa.checked &&
      wynagrodzenie >= 8550 &&
      wynagrodzenie <= 11141
    ) {
      ulga_klasa_kwota = (
        ((wynagrodzenie * -7.35).toFixed(2) + 819.08) /
        0.17
      ).toFixed(2);
    } else {
      ulga_klasa_kwota = 0;
    }

    console.log(ulga_klasa_kwota);

    // Calculate the amount of tax decductible expenses
    if (kup.checked) {
      kup_kwota = 250;
    } else {
      kup_kwota = 350;
    }

    // Calculate the taxable income
    const podstawa_zaliczki = podstawa_zdrow - kup_kwota;

    // Check if the tax exemption applies due to the age
    if (wiek.checked) {
      zaliczka_podatkowa =
        (podstawa_zaliczki * 0.17).toFixed(2) -
        ulga_podatkowa_kwota -
        ulga_klasa_kwota;
    } else {
      zaliczka_podatkowa = 0;
    }

    // Calculate the net salary
    const kwota_do_wyplaty =
      podstawa_zdrow - skladka_zdrow - zaliczka_podatkowa;

    wynagrodzenie_netto.value = kwota_do_wyplaty.toFixed(2);
  }

  return (
    <div className="calc-salary" id="calc-salary">
      <h2>Kalkulator wynagrodzeń - umowa o pracę</h2>
      <form
        action="index.html"
        method="post"
        name="calculator_salary"
        className="form_1"
      >
        <div className="wynagrodzenie">
          <label htmlFor="wynagrodzenie">Wynagrodzenie brutto (w PLN)*</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="wynagrodzenie"
            name="wynagrodzenie"
            required
            autoComplete="off"
          />
        </div>

        <div className="ulga_podatkowa">
          <input
            type="checkbox"
            id="ulga_podatkowa"
            name="ulga_podatkowa"
            value="1"
            autoComplete="off"
          />
          <label htmlFor="ulga_podatkowa">Kwota zmniejszająca podatek</label>
        </div>

        <div className="ulga_klasa">
          <input
            type="checkbox"
            id="ulga_klasa"
            name="ulga_klasa"
            autoComplete="off"
          />
          <label htmlFor="ulga_klasa">Ulga dla klasy średniej**</label>
        </div>

        <div className="kup">
          <input
            type="checkbox"
            id="kup"
            name="kup"
            value="1"
            autoComplete="off"
          />
          <label htmlFor="kup">Praca w miejscu zamieszkania</label>
        </div>

        <div className="wiek">
          <input
            type="checkbox"
            id="wiek"
            name="wiek"
            value="1"
            autoComplete="off"
          />
          <label htmlFor="wiek">Ukończony 26 rok życia</label>
        </div>

        <div className="oblicz">
          <button
            type="button"
            id="oblicz_wynagrodzenie"
            name="oblicz_wynagrodzenie"
            onClick={() => calculateSalary()}
          >
            Oblicz
          </button>
        </div>
      </form>
      <div className="wynagrodzenie_netto">
        <label htmlFor="wynagrodzenie_netto">Wynagrodzenie netto (w PLN)</label>
        <input
          type="number"
          id="wynagrodzenie_netto"
          name="wynagrodzenie_netto"
          readOnly
        />
      </div>
      <div className="info">
        <p>
          * Od 1 stycznia 2022 roku minimalne wynagrodzenie brutto wynosi 3.010
          PLN
        </p>
        <p>
          ** Ulga dla klasy średniej przysługuje, gdy przychód pracownika wynosi
          co najmniej 5.701 zł oraz nie więcej niż 11.141 zł.
        </p>
      </div>
    </div>
  );
};

export default Wynagrodzenia;
