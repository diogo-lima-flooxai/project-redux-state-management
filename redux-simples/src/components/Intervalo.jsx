import "./Intervalo.css";
import { connect } from "react-redux";

import Card from "./Card";
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong>Maximo:</strong>
          <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
