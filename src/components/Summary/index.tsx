import incomeimg from "../../assets/income.svg";
import outcomeimg from "../../assets/outcome.svg";
import totalimg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeimg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeimg} alt="Saídas" />
        </header>
        <strong>R$500,00</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalimg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
