function App() {

  return (<div
    className='font-["Inter"] flex items-center flex-col px-4 space-y-6'
  >
    <h1 className='text-2xl font-bold mb-6'>Divisão de gastos</h1>
    <hr className="w-full border-slate-600" />

    <div className="w-full space-y-3">
      <h2 className='text-lg font-medium'>Valor inicial</h2>
      <input type="number" name="" id="" prefix="R$" />
    </div>

    <div className="w-full space-y-3">
      <h2 className='text-lg font-medium'>Investimento de %</h2>
      <input type="number" name="" id="" />
    </div>

    <div className="w-full space-y-3">
      <h2 className='text-lg font-medium'>Lazer de %</h2>
      <input type="number" name="" id="" />
    </div>

    <div className="w-full space-y-3">
      <h2 className='text-lg font-medium'>Restante</h2>
      <input type="number" name="" id="" />
    </div>
  </div>)
}

export default App
