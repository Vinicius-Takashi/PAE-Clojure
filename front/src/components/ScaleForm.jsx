export default function ScaleForm({
  scaleLength,
  isLoading,
  onScaleLengthChange,
  onSubmit,
}) {
  return (
    <form className="scale-form" onSubmit={onSubmit}>
      <div className="form-heading">
        <span>Calculo tecnico</span>
        <label htmlFor="scale-length">Escala do instrumento</label>
      </div>
      <div className="form-row">
        <div className="input-shell">
          <input
            id="scale-length"
            min="1"
            step="0.01"
            type="number"
            value={scaleLength}
            onChange={(event) => onScaleLengthChange(event.target.value)}
          />
          <span>mm</span>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Calculando' : 'Calcular'}
        </button>
      </div>
    </form>
  );
}
