import { formatMillimeters } from '../utils/formatters.js';

export default function ResultSummary({ result }) {
  const firstFret = result?.resultado?.[0];
  const twelfthFret = result?.resultado?.find((item) => item.traste === 12);

  return (
    <section className="summary-grid" aria-label="Resumo do calculo">
      <article className="summary-item">
        <span>Escala informada</span>
        <strong>{formatMillimeters(result?.escala)}</strong>
      </article>
      <article className="summary-item">
        <span>1o traste</span>
        <strong>{formatMillimeters(firstFret?.distPestana)}</strong>
      </article>
      <article className="summary-item">
        <span>12o traste</span>
        <strong>{formatMillimeters(twelfthFret?.distPestana)}</strong>
      </article>
    </section>
  );
}
