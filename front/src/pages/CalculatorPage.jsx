import { useState } from 'react';
import ResultSummary from '../components/ResultSummary.jsx';
import ResultsTable from '../components/ResultsTable.jsx';
import ScaleForm from '../components/ScaleForm.jsx';
import StatusMessage from '../components/StatusMessage.jsx';
import { calculateFrets } from '../services/fretCalculatorService.js';

export default function CalculatorPage() {
  const [scaleLength, setScaleLength] = useState('650');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const parsedScaleLength = Number(scaleLength);

    if (!parsedScaleLength || parsedScaleLength <= 0) {
      setError('Informe uma escala maior que zero.');
      setResult(null);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const data = await calculateFrets(parsedScaleLength);
      setResult(data);
    } catch (requestError) {
      setError(requestError.message);
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="app-shell">
      <section className="tool-intro" aria-labelledby="page-title">
        <div>
          <h1 id="page-title">Calculadora de trastes</h1>
        </div>
        <p>
          Informe o comprimento da escala e gere as medidas de posicionamento dos
          trastes.
        </p>
      </section>

      <div className="workspace">
        <section className="control-panel">
          <ScaleForm
            scaleLength={scaleLength}
            isLoading={isLoading}
            onScaleLengthChange={setScaleLength}
            onSubmit={handleSubmit}
          />

          {error ? <StatusMessage variant="error">{error}</StatusMessage> : null}
          {!result && !error ? (
            <StatusMessage>Digite a escala em milimetros para gerar o mapa dos trastes.</StatusMessage>
          ) : null}
        </section>

        {result ? (
          <>
            <ResultSummary result={result} />
            <ResultsTable frets={result.resultado} />
          </>
        ) : null}
      </div>
    </main>
  );
}
