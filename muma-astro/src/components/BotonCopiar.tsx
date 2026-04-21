import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function BotonCopiar({ texto }: { texto: string }) {
  const [copiado, setCopiado] = useState(false)

  const copiar = () => {
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    })
  }

  return (
    <button
      onClick={copiar}
      aria-label={copiado ? 'Copiado' : `Copiar ${texto}`}
      className="flex items-center gap-2 mt-3 px-4 py-2 rounded-xl border border-marca-principal/40 text-marca-principal text-xs font-bold hover:bg-marca-principal/10 active:scale-95 transition-all"
    >
      {copiado ? <Check size={14} /> : <Copy size={14} />}
      {copiado ? '¡Copiado!' : 'Copiar'}
    </button>
  )
}
