const Header = () => {
  return (
    <header className="main-header">
      <a href="/">
        <h1 className="name">Kalkulatory finansowe</h1>
      </a>
      <div className="main-nav">
        <ul>
          <a href="/kalkulator-wynagrodzen">
            <li>Kalkulator wynagrodzeń</li>
          </a>
          <a href="/kalkulator-kosztow">
            <li>Kalkulator kosztów uzyskania przychodu</li>
          </a>
          <a href="/kalkulator-podatku-dochodowego">
            <li>Kalkulator podatku dochodowego</li>
          </a>
          <a href="/kalkulator-walutowy">
            <li>Kalkulator wymiany walut</li>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
