import InputNumber from "./InputNumber"

function App() {

  return (<div
    className='font-["Inter"] flex items-center flex-col px-4 space-y-6'
  >
    <h1 className='text-2xl font-bold mb-2'>Divisão de gastos</h1>
    <hr className="w-full border-slate-600" />

    <div className="w-full space-y-3 flex items-center flex-col">
      <h2 className='text-lg font-medium'>Valor inicial</h2>
      <InputNumber defaultValue={0}/>
    </div>

    <div className="w-full space-y-3 flex items-center flex-col">
      <h2 className='text-lg font-medium'>Investimento</h2>
      <InputNumber defaultValue={0}/>
    </div>

    <div className="w-full space-y-3 flex items-center flex-col">
      <h2 className='text-lg font-medium'>Lazer</h2>
      <InputNumber defaultValue={0}/>
    </div>

    <div className="w-full space-y-3 flex items-center flex-col">
      <h2 className='text-lg font-medium'>Restante</h2>
      <InputNumber defaultValue={0} />
    </div>
  </div>)
}

export default App
