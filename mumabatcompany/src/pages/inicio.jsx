import { useState } from "react";
// BORRA estas líneas de logos y App.css
import Hero from '../components/hero';
import Calculadora from '../components/calculadora';
// import BentoCard from '../components/BentoCard'; 

export default function Inicio() {
  return (
    <main className="bg-muma-dark">
      <Hero />
      <Calculadora />
      {/* El resto de tu contenido aquí */}
    </main>
  );
}