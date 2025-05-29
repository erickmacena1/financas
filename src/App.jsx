import InputNumber from "./InputNumber"

function App() {

  return (<div
    className='font-["Inter"] flex items-center flex-col px-4 space-y-4'
  >
    <h1 className='text-2xl font-bold m-4'>Divisão de gastos</h1>

    <hr className="w-full border-slate-600" />

    <div className="w-full space-y-3 flex items-center flex-col">
      <h2 className='text-lg font-medium'>Valor inicial (R$)</h2>
      <InputNumber defaultValue={0} />
    </div>

    <div className="w-full space-y-3 flex items-center flex-col">
      <h2 className='text-lg font-medium'>Porcentagem de Investimento (%)</h2>
      <InputNumber defaultValue={0} />
    </div>

    <div className="w-full space-y-3 flex items-center flex-col">
      <h2 className='text-lg font-medium'>Porcentagem de Lazer (%)</h2>
      <InputNumber defaultValue={0} />
    </div>

    {/* <div className="w-full space-y-3 flex items-center flex-col">
      <h2 className='text-lg font-medium'>Restante</h2>
      <InputNumber defaultValue={0} />
    </div> */}

    <div className="w-full bg-slate-800 flex items-center flex-col p-4 space-y-4">
      {/* RESULTADOS */}
      <h1 className='text-2xl font-bold mb-4'>Montantes</h1>

      <hr className="w-full border-slate-600" />

      <div className="w-full space-y-3 flex items-center flex-col">
        <h2 className='text-lg font-medium'>Valor de Investimento (R$)</h2>
        <InputNumber defaultValue={0} />
      </div>

      <div className="w-full space-y-3 flex items-center flex-col">
        <h2 className='text-lg font-medium'> Valor de Lazer (R$)</h2>
        <InputNumber defaultValue={0} />
      </div>

      <div className="w-full space-y-3 flex items-center flex-col">
        <h2 className='text-lg font-medium'> Saldo (R$)</h2>
        <InputNumber defaultValue={0} />
      </div>
    </div>
  </div>)
}

export default App
