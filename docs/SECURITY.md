# 🔒 Política de Seguridad

## Principios Fundamentales

1. **Credenciales: NUNCA en repositorio**
   - `.env` (real) → `.gitignore`
   - `.env.example` (template) → Git ✅
   - Secretos en CI/CD, env vars en deploy

2. **Build artifacts: Compilación limpia**
   - `dist/`, `.astro/`, `node_modules/` → `.gitignore`
   - Compilar siempre en ambiente limpio (CI/CD o local pre-commit)

3. **Datos privados: Fuera del repositorio**
   - Transcripciones, PDFs sensibles → archivo local
   - Reportes internos → info-externa/ documentado pero NO en git

4. **Dependencias: Auditar regularmente**
   ```bash
   npm audit
   npm update
   ```

## Variables de Entorno Requeridas

```env
# Supabase (público en frontend)
PUBLIC_SUPABASE_URL=https://[project].supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Backend (secreto, CI/CD solo)
SUPABASE_SERVICE_ROLE_KEY=eyJ...
DATABASE_PASSWORD=...
```

## Flujo de Seguridad

### Commit local
- `npm run build` (verifica compilación)
- Revisar `.env` no está en staging: `git status`
- Commit con mensaje claro

### Push a GitHub
- Rama de trabajo primero
- PR con descripción
- Code review

### Deploy a producción
- Variables en GitHub Secrets
- CI/CD inyecta en build
- No pushear .env nunca

## Incidentes

Credenciales comprometidas:
1. `git rm --cached .env`
2. Regenerar en Supabase
3. Force push NO necesario si nunca fue público
4. Avisar a equipo
