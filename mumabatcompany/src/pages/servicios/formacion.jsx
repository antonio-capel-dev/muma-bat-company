import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Mic2, TreePine, Leaf, Droplets, Scale, Wheat,
  Building2, Globe, ArrowRight, FlaskConical, Lightbulb, Gamepad2
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const fadeUp = {
  oculto:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const servicios = [
  {
    Icono: Mic2,
    titulo: "Consultoría bioacústica",
    desc: "Auditoría de fauna mediante análisis ultrasónico. Identificamos qué especies están presentes en tu territorio, cómo se distribuyen y qué estado tienen las colonias. Datos reales de campo, no estimaciones.",
    para: "Administraciones, reservas naturales, promotores",
  },
  {
    Icono: TreePine,
    titulo: "Gestión forestal",
    desc: "Diseño de refugios y corredores biológicos en masas forestales para recuperar la presencia de murciélagos como controladores naturales de insectos y plagas.",
    para: "Gestores forestales, administraciones, propietarios de fincas",
  },
  {
    Icono: Lightbulb,
    titulo: "Innovación aplicada",
    desc: "Desarrollo de metodologías propias que combinan trabajo de campo, tecnología inmersiva y archivo bioacústico. La innovación como forma de mirar, no solo como herramienta.",
    para: "Centros de investigación, universidades, empresas tecnológicas",
  },
  {
    Icono: Gamepad2,
    titulo: "Serious Games y gamificación",
    desc: "Experiencias gamificadas basadas en conocimiento científico real para reforzar el aprendizaje sobre murciélagos y conservación en aulas, museos y eventos.",
    para: "Centros educativos, museos, actividades infantiles",
  },
  {
    Icono: FlaskConical,
    titulo: "Monitorización de colonias",
    desc: "Seguimiento continuo de colonias de murciélagos con sensores y grabación bioacústica. Informes periódicos con datos de actividad, especies detectadas y tendencias de población.",
    para: "Parques naturales, cuevas turísticas, fincas",
  },
  {
    Icono: TreePine,
    titulo: "Restauración ecológica",
    desc: "Diseño de microhábitats y corredores biológicos para recuperar la función de los murciélagos en un ecosistema. Incluye instalación de refugios técnicos y seguimiento posterior.",
    para: "Ayuntamientos, gestores forestales, promotoras",
  },
  {
    Icono: Wheat,
    titulo: "Agricultura y control biológico",
    desc: "Una colonia de murciélagos elimina hasta 3.000 insectos por noche. Asesoramos a fincas agrícolas para integrar colonias naturales como alternativa real a los pesticidas.",
    para: "Viñedos, olivares, fincas hortícolas",
  },
  {
    Icono: Building2,
    titulo: "Ciudades y entornos urbanos",
    desc: "Los murciélagos son indicadores de la salud del ecosistema urbano. Diseñamos estrategias de integración de fauna en espacios verdes, parques y edificios con criterio científico.",
    para: "Ayuntamientos, arquitectos, Smart Cities",
  },
  {
    Icono: Leaf,
    titulo: "Soluciones basadas en la naturaleza (SbN)",
    desc: "Aplicamos metodologías de conservación reconocidas internacionalmente para resolver problemas ambientales concretos: plagas, pérdida de biodiversidad, degradación de suelos.",
    para: "Administraciones públicas, empresas con ESG",
  },
  {
    Icono: Droplets,
    titulo: "Sostenibilidad ambiental",
    desc: "Informes técnicos de biodiversidad para proyectos de construcción, turismo o explotación agrícola. Evaluación de impacto y propuesta de medidas compensatorias con base científica.",
    para: "Promotoras, consultoras, estudios de arquitectura",
  },
  {
    Icono: Scale,
    titulo: "Consultoría jurídico-ambiental",
    desc: "Los murciélagos están protegidos por legislación europea (EUROBATS) y nacional. Asesoramos sobre cumplimiento normativo, licencias y gestión legal en proyectos que afecten a sus hábitats.",
    para: "Promotoras, administraciones, gestores de cuevas",
  },
  {
    Icono: Globe,
    titulo: "Educación ambiental y formación",
    desc: "Talleres, charlas y programas formativos sobre quirópteros para colegios, universidades, guardas forestales y técnicos ambientales. Contenidos desarrollados desde la investigación de campo real.",
    para: "Centros educativos, equipos técnicos, museos",
  },
];

export default function FormacionConsultoria() {
  return (
    <>
      <Helmet>
        <title>Consultoría y Formación | MUMA BAT COMPANY</title>
        <meta
          name="description"
          content="Consultoría bioacústica, restauración ecológica, control biológico de plagas y formación ambiental. Respaldados por SECEMU y el proyecto europeo ST3ER."
        />
        <link rel="canonical" href="https://mumabatcompany.com/servicios/formacion" />
      </Helmet>
      <Navbar />

      <main className="min-h-screen bg-fondo-base pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* CABECERA */}
          <motion.div
            initial="oculto" animate="visible" variants={fadeUp}
            className="mb-20 max-w-3xl"
          >
            <p className="text-xs font-bold tracking-[0.25em] text-marca-principal uppercase mb-4">
              Consultoría &amp; Formación
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-texto-titulo leading-tight tracking-tight mb-6">
              Conocimiento de campo aplicado a problemas reales.
            </h1>
            <p className="text-texto-secundario text-lg leading-relaxed max-w-2xl">
              No somos un centro de interpretación. Somos el equipo que lleva años en el territorio — grabando colonias, instalando refugios y colaborando con instituciones científicas europeas. Ese conocimiento es lo que ofrecemos.
            </p>
          </motion.div>

          {/* GRID DE SERVICIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {servicios.map(({ Icono, titulo, desc, para }, i) => (
              <motion.div
                key={i}
                initial="oculto" whileInView="visible" viewport={{ once: true }}
                variants={{
                  oculto:  { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } },
                }}
                className="bg-fondo-superficie rounded-2xl p-7 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-marca-principal/10 border border-marca-principal/20 flex items-center justify-center mb-5 shrink-0">
                  <Icono size={20} className="text-marca-principal" aria-hidden="true" />
                </div>
                <h2 className="text-base font-bold text-texto-titulo mb-3 leading-tight">{titulo}</h2>
                <p className="text-sm text-texto-secundario leading-relaxed mb-5 flex-1">{desc}</p>
                <p className="text-[10px] font-bold tracking-widest text-marca-principal/60 uppercase">
                  {para}
                </p>
              </motion.div>
            ))}
          </div>

          {/* AVALES */}
          <motion.div
            initial="oculto" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-fondo-superficie rounded-2xl border border-white/5 p-10 mb-16 flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="flex-1">
              <p className="text-xs font-bold tracking-[0.2em] text-marca-principal uppercase mb-3">Respaldo científico</p>
              <h3 className="text-2xl font-bold text-texto-titulo mb-4 leading-tight">
                Cada informe está firmado desde el campo, no desde un despacho.
              </h3>
              <p className="text-texto-secundario text-sm leading-relaxed">
                Somos miembros activos de SECEMU, alineados con el marco EUROBATS y ex-investigadores del proyecto europeo ST3ER en España, Portugal y Eslovenia. Eso es lo que convierte nuestros informes en documentos con peso real ante administraciones e instituciones.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              {["SECEMU", "EUROBATS", "ST3ER — SMP COSME UE", "FEDER"].map((aval, i) => (
                <div key={i} className="px-5 py-2.5 rounded-xl bg-marca-principal/10 border border-marca-principal/20 text-xs font-bold text-marca-principal tracking-widest uppercase text-center">
                  {aval}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="oculto" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-texto-titulo mb-4">
              ¿Tienes un proyecto concreto?
            </h3>
            <p className="text-texto-secundario mb-8 max-w-lg mx-auto">
              Cuéntanos el contexto — territorio, especie, problema o normativa — y te decimos si podemos ayudarte y cómo.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-marca-principal text-texto-sobre-accion font-bold rounded-xl hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
            >
              Hablar con el equipo <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  );
}
