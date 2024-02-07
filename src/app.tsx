import logo from './assets/logo-nlw-expert.svg';

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert"/>

      <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight 
            outline-none placeholder:text-slate-500"  
        />
      </form> 

      <div className="h-px bg-slate-700"/>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-md bg-slate-700 p-5 space-y-3"> 
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative"> 
          <span className="text-sm font-medium text-slate-300">
            Há 2 dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae blanditiis, nihil asperiores tempore nostrum optio voluptatem deleniti saepe perferendis repellendus mollitia neque, quod fuga eum. Tenetur animi temporibus porro laboriosam.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 
            bg-gradient-to-t from-black/60 to-transparent pointer-events-none"/>
        </div>
        
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative"> 
          <span className="text-sm font-medium text-slate-300">
            Há 4 dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam cum vitae, dicta velit omnis inventore? At, quaerat odit a libero laboriosam, saepe nisi fugiat placeat similique, accusantium molestiae obcaecati culpa?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam sed saepe rerum ipsa accusamus voluptatum facere quibusdam quod? Ex exercitationem corporis saepe nesciunt! Exercitationem quasi dicta alias laboriosam quia.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 
            bg-gradient-to-t from-black/60 to-transparent pointer-events-none"/>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative"> 
          <span className="text-sm font-medium text-slate-300">
            Há 7 dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur a dolore perspiciatis consequatur quibusdam cumque ad, adipisci sint. Doloremque obcaecati enim dolorem, eaque numquam ullam impedit cum atque commodi animi.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 
            bg-gradient-to-t from-black/60 to-transparent pointer-events-none"/>
        </div>

      </div>
    </div>
  )
}
