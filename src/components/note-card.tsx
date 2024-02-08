export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 
      overflow-hidden relative hover:ring-2 hover:ring-slate-600 
      transition-shadow outline-none focus-visible:ring-2
      focus-visible:ring-lime-400"> 
        <span className="text-sm font-medium text-slate-300">
          Há 8 dias
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus 
          cum dolores repudiandae possimus nihil non fugit omnis in, optio aspernatur 
          nemo quibusdam mollitia totam eos aliquam rerum, minima deserunt.
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 
          bg-gradient-to-t from-black/60 to-transparent pointer-events-none"/>
    </button>
  )
}