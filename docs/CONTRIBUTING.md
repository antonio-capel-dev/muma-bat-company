# 👥 Guía de Contribución

## Setup inicial

```bash
git clone https://github.com/RUBENGOMEZARTECHE/mumaFinal.git
cd mumaFinal/muma-astro

# Instalar dependencias
npm install

# Variables locales (nunca commitear)
cp .env.example .env.local
# Editar .env.local con credenciales Supabase locales
```

## Flujo de trabajo

### 1. Crear rama de feature
```bash
git checkout -b feat/tu-feature
# o: git checkout -b fix/tu-bug
```

### 2. Desarrollar
```bash
npm run dev    # Astro dev server localhost:3000

# Verificar código
npm run build  # Debe pasar sin errores
```

### 3. Commits claros
```bash
git add muma-astro/src/...
git commit -m "feat: descripción de cambio

Explica el por qué en 2-3 líneas si es necesario."
```

**Nunca commitear:**
- `.env` (credenciales reales)
- `dist/`, `.astro/` (build artifacts)
- `node_modules/` (dependencias)

### 4. Push y PR
```bash
git push origin feat/tu-feature
# GitHub: "Create Pull Request" con descripción
```

## Estándares

### Componentes React
- Usar TypeScript
- Props tipadas
- Componentes funcionales
- Lazy load si > 50KB

### Estilos
- Tailwind primero
- Variables CSS: `var(--marca-principal)`
- Mobile-first responsive

### Base de datos
- Queries en MapaRefugios.tsx
- Filtrar `activo=true` (soft delete)
- Validar en servidor (Edge Functions futuro)

## Testing

```bash
# Verificación básica
npm run build

# Manual testing en navegador
npm run dev
# Probar en http://localhost:3000/servicios/refugios
```

## Preguntas?

1. Leer [PROJECT_GUIDE.md](./PROJECT_GUIDE.md)
2. Revisar [ARCHITECTURE.md](./ARCHITECTURE.md)
3. Crear issue en GitHub
