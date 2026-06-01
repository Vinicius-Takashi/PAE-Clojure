import { formatMillimeters } from '../utils/formatters.js';

export default function ResultsTable({ frets }) {
  return (
    <section className="table-section" aria-label="Tabela de medidas">
      <div className="table-heading">
        <span>Mapa completo</span>
        <strong>Medidas para 24 trastes</strong>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Traste</th>
              <th>Distancia da pestana</th>
              <th>Distancia da ponte</th>
              <th>Tamanho do intervalo</th>
            </tr>
          </thead>
          <tbody>
            {frets.map((fret) => (
              <tr key={fret.traste}>
                <td>{fret.traste}</td>
                <td>{formatMillimeters(fret.distPestana)}</td>
                <td>{formatMillimeters(fret.distPonte)}</td>
                <td>{formatMillimeters(fret.tamanhoTraste)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
