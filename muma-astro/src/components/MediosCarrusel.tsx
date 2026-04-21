import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } }
};

const medios = [
  { img: '/images/imagenes_articulos/noticia-1.webp', medio: 'Málaga Hoy', año: 2022, titulo: 'Murciélagos, un "plaguicida" natural en los viñedos malagueños', url: 'https://www.malagahoy.es/malaga/Murcielagos-plaguicida-natural_0_1700230453.html' },
  { img: '/images/imagenes_articulos/noticia-2.webp', medio: 'Málaga Hoy', año: 2022, titulo: 'Los murciélagos, la solución contra las plagas de mosquitos en el Guadalhorce', url: 'https://www.malagahoy.es/malaga/murcielago-solucion-natural-mosquito-Gualdalhorce_0_1720029457.html' },
  { img: '/images/imagenes_articulos/noticia-3.webp', medio: 'Málaga Hoy', año: 2022, titulo: 'Murciélagos contra los mosquitos en el Parador de Golf de Málaga', url: 'https://www.malagahoy.es/malaga/Murcielagos-contra-mosquitos-Parador-Golf-Malaga_0_1733228800.html' },
  { img: '/images/imagenes_articulos/noticia-4.webp', medio: 'Málaga Hoy', año: 2022, titulo: 'El colegio de Málaga que emplea los murciélagos para controlar las plagas', url: 'https://www.malagahoy.es/malaga/colegio-Malaga-murcielagos-controlar-plagas-mosquitos_0_1741927739.html' },
  { img: '/images/imagenes_articulos/noticia-5.webp', medio: 'Málaga Hoy', año: 2023, titulo: 'Vivir en una cueva de murciélagos gracias al metaverso', url: 'https://www.malagahoy.es/malaga/vivir-cueva-murcielagos-metaverso-malaguenos_0_1831018149.html' },
  { img: '/images/imagenes_articulos/noticia-6.webp', medio: 'Málaga Hoy', año: 2025, titulo: 'El Polo Digital, cabeza tractora de la innovación en Málaga', url: 'https://www.malagahoy.es/malaga/polo-digital-cabeza-tractora-innovacion-malaga_0_2004160346.html' },
  { img: '/images/imagenes_articulos/noticia-7.webp', medio: 'Málaga Hoy', año: 2025, titulo: 'Selwo y Murciélagos Málaga colaboran en un proyecto de conservación', url: 'https://www.malagahoy.es/malaga/selwo-murcielagos-malaga-proyecto-consevacion_0_2004334845.html' },
  { img: '/images/imagenes_articulos/noticia-8.webp', medio: 'Diario SUR', año: 2025, titulo: 'Murciélagos y control del mosquito tigre en la Costa del Sol', url: 'https://www.diariosur.es/costadelsol/murcielagos-mosquito-tigre-20250812111305-nt.html' },
  { img: '/images/imagenes_articulos/noticia-9.webp', medio: 'SUR in English', año: 2025, titulo: 'Bats against tiger mosquitoes on the Costa del Sol', url: 'https://www.surinenglish.com/malaga/bats-against-tiger-mosquitoes-20250818075053-nt.html' },
  { img: '/images/imagenes_articulos/noticia-10.webp', medio: 'Málaga Hoy', año: 2025, titulo: 'La Cueva de Nerja acerca a sus visitantes los beneficios de los murciélagos', url: 'https://www.malagahoy.es/malaga/cueva-nerja-visitantes-beneficios-murcielagos_0_2004893931.html' },
  { img: '/images/imagenes_articulos/noticia-11.webp', medio: 'La Opinión de Málaga', año: 2025, titulo: 'Ecoturismo en Andalucía y Asturias', url: 'https://www.laopiniondemalaga.es/malaga/2025/11/02/ecoturismo-andalucia-asturias-basanconsolidarse-123265443.html' },
  { img: '/images/imagenes_articulos/noticia-12.webp', medio: 'El Confidencial', año: 2025, titulo: 'Murciélagos vs. virus del Nilo: la cruzada de una empresa malagueña', url: 'https://www.elconfidencial.com/espana/andalucia/2025-11-17/murcielagos-malaga-mosquitos-plagas-conservacion-1hms_4246141/' },
  { img: '/images/imagenes_articulos/noticia-13.webp', medio: 'Málaga Hoy', año: 2025, titulo: 'Los murciélagos, grandes aliados contra plagas y los mosquitos del Virus del Nilo', url: 'https://www.malagahoy.es/malaga/murcielagos-aliados-mosquitos-virus-nilo-malaga_0_2005367409.html' },
  { img: '/images/imagenes_articulos/noticia-14.webp', medio: 'Europa Press', año: 2026, titulo: 'Startups agro explican en 4YFN cómo afrontar los retos del campo español', url: 'https://www.europapress.es/epagro/agricultura/noticia-mwc-startups-agro-explican-4yfn-afrontar-retos-campo-espanol-innovando-20260303101148.html' },
];

export default function MediosCarrusel() {
  const [index, setIndex] = useState(0);
  const [visibles, setVisibles] = useState(3);
  const gap = 24;

  const getVisibles = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  useEffect(() => {
    const onResize = () => {
      const v = getVisibles();
      setVisibles(v);
      setIndex((prev) => Math.min(prev, Math.max(0, medios.length - v)));
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getVisibles]);

  const maxIndex = Math.max(0, medios.length - visibles);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div style={{ padding: '56px 24px 0' }}>
      <motion.div
        initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h3 style={{ color: 'var(--color-texto-titulo)', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
              MUMA en los medios
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Anterior"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-borde-lila, #7c3aed)',
                color: 'white',
                width: '42px', height: '42px',
                borderRadius: '50%',
                cursor: index === 0 ? 'default' : 'pointer',
                fontSize: '1.1rem',
                opacity: index === 0 ? 0.2 : 1,
                transition: '0.3s',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              aria-label="Siguiente"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-borde-lila, #7c3aed)',
                color: 'white',
                width: '42px', height: '42px',
                borderRadius: '50%',
                cursor: index >= maxIndex ? 'default' : 'pointer',
                fontSize: '1.1rem',
                opacity: index >= maxIndex ? 0.2 : 1,
                transition: '0.3s',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div style={{ overflow: 'hidden', padding: '10px 0' }}>
          <div
            style={{
              display: 'flex',
              gap: `${gap}px`,
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${index * (100 / visibles + gap * 100 / (visibles * 12 * 100))}%)`,
            }}
          >
            {medios.map((noticia, i) => (
              <a
                key={i}
                href={noticia.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  minWidth: `calc(${100 / visibles}% - ${gap * (visibles - 1) / visibles}px)`,
                  background: 'var(--color-fondo-secundario, #111827)',
                  border: '1px solid var(--color-borde-lila, #7c3aed)',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  overflow: 'hidden',
                }}
                className="noticia-card-hover"
              >
                <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={noticia.img}
                    alt={noticia.titulo}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'rgba(11,17,23,0.8)',
                    padding: '2px 10px', borderRadius: '6px', fontSize: '10px',
                    color: 'var(--color-marca-principal, #1fe1a7)',
                    border: '1px solid var(--color-borde-lila, #7c3aed)',
                    fontWeight: 'bold',
                  }}>
                    {noticia.año}
                  </span>
                </div>
                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontSize: '10px',
                    color: 'var(--color-marca-principal, #1fe1a7)',
                    fontWeight: 800,
                    textTransform: 'uppercase' as const,
                    marginBottom: '8px',
                  }}>
                    {noticia.medio}
                  </span>
                  <h4 style={{
                    color: 'var(--color-texto-titulo, #fff)',
                    fontSize: '1rem',
                    margin: '0 0 15px 0',
                    lineHeight: 1.4,
                    fontWeight: 600,
                  }}>
                    {noticia.titulo}
                  </h4>
                  <span style={{
                    marginTop: 'auto',
                    color: 'var(--color-marca-principal, #1fe1a7)',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}>
                    Leer noticia →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center' as const, marginTop: '24px' }}>
          <a
            href="/noticias"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--color-marca-principal, #1fe1a7)',
              textDecoration: 'none',
            }}
          >
            Ver todas las noticias <ArrowRight size={14} />
          </a>
        </div>
      </motion.div>
      <style>{`
        .noticia-card-hover:hover {
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.2);
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}
