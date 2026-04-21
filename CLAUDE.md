# 🔐 CLAUDE.md - Políticas de Seguridad y Desarrollo

## CRÍTICO: Seguridad

### 🚨 Incidente de Seguridad 2026-04-17
- **Problema:** Credenciales de Supabase fueron subidas a GitHub en el historial de commits
- **Solución:** Reescritura completa del historial de git (95 commits → 1 commit limpio)
- **Fecha fix:** 2026-04-17 18:30 UTC
- **Estado:** ✅ RESUELTO

### Protecciones Activas
1. **NUNCA** hacer commit de `.env` (archivo con secretos)
   - Solo `.env.example` (template) puede estar en git
   - `.env` está en `.gitignore` desde línea 1
   
2. **Información interna prohibida en git:**
   - ❌ MEMORIA.md (decisiones técnicas privadas)
   - ❌ AUDIT_REPORT.md (auditoría interna)
   - ❌ INFORME_ESTADO_TECNICO_DETALLADO.md
   - ❌ PLAN_VENTAS_JUNIOR.md
   - ❌ database/ (esquemas internos)
   - ❌ docs/ (documentación no pública)
   - ❌ info-externa/ (información confidencial)
   
3. **Credenciales Supabase - ACCIÓN INMEDIATA:**
   - ⚠️ Claves públicas (ANON_KEY) visibles en GitHub fueron revocadas
   - ⚠️ Si hay SERVICE_ROLE_KEY expuesta, ROTAR INMEDIATAMENTE:
     1. Dashboard Supabase → Project Settings → API
     2. Regenerar todas las claves
     3. Actualizar CI/CD secrets

### Pre-commit Checklist
Antes de hacer `git add`:
- [ ] Revisar archivos: ¿contienen URLs de APIs privadas?
- [ ] Revisar archivos: ¿contienen IDs de proyecto o configuración sensible?
- [ ] Revisar: ¿hay comentarios con contraseñas o tokens?
- [ ] Usar: `git diff --cached` para verificar qué se va a subir

## Estructura del Repositorio

**QUÉ ESTÁ EN GIT (público):**
```
muma-astro/        ✅ Código fuente React/Astro (sin .env)
backend/           ✅ Código fuente PHP (sin .env con secretos)
scripts/           ✅ Scripts de utilidad
backend/.env.example  ✅ Template (sin valores reales)
muma-astro/.env.example ✅ Template (sin valores reales)
```

**QUÉ NO ESTÁ EN GIT (local):**
```
.env                   ❌ Secretos reales (gitignored)
database/              ❌ Esquemas internos
docs/                  ❌ Documentación interna
MEMORIA.md             ❌ Decisiones arquitectura
AUDIT_REPORT.md        ❌ Auditoría técnica
info-externa/          ❌ Información confidencial
.claude/               ❌ Configuración de desarrollo
```

## Desarrollo y Deployment

### Variables de Entorno

**Frontend (muma-astro/):**
```env
PUBLIC_SUPABASE_URL=...         # Públicas (hardcodeadas es ok)
PUBLIC_SUPABASE_ANON_KEY=...    # Públicas (limited scope)
```

**Backend (backend/):**
```env
DB_HOST=...                     # Nunca en git
DB_USER=...                     # Nunca en git
DB_PASSWORD=...                 # Nunca en git
SUPABASE_SERVICE_ROLE_KEY=...   # CRÍTICO: Nunca en git
```

### GitHub Secrets (para CI/CD)
Configurar en: Settings → Secrets and Variables → Actions
```
SUPABASE_SERVICE_ROLE_KEY       ← Para deploy
DB_PASSWORD                      ← Para migrations
```

## Comandos Seguros

✅ **Safe - Usar estos:**
```bash
git status              # Ver cambios
git diff              # Ver qué se va a subir
git add archivo.tsx   # Agregar archivo específico
git commit -m "..."   # Hacer commit
git push              # Push normal
```

❌ **PELIGROSOS - NUNCA hacer:**
```bash
git add .             # NUNCA - puede incluir .env
git add *.env         # NUNCA - estás agregando secretos
git add -f .env       # NUNCA - force agrega ignorados
```

## Post-Breach Recovery

Si accidentalmente se suben credenciales:

1. **Inmediato (primeros 5 minutos):**
   - Rotar credenciales en Supabase / servicio afectado
   - NO hacer más commits
   
2. **Dentro de 1 hora:**
   - Comunicar al equipo
   - Avisar si rebase/force-push será necesario
   
3. **Reescritura de historial (si es crítico):**
   ```bash
   # No hacerlo sin supervisión - destructivo
   git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch archivo.env' ...
   git push origin master --force
   ```

## Team Guidelines

- **Álvaro (DAW student):** Nunca hacer force push a master. Crear PR.
- **Todo el equipo:** Revisar `.env.example` antes de commit para recordar valores sensibles.
- **Code review:** Siempre revisar `git diff` antes de merge.

## Referencias Útiles

- Supabase RLS (Row-Level Security): `muma-astro/src/lib/supabase.ts`
- Backend auth: `backend/src/Services/AuthService.php`
- Seguridad API: `backend/src/Core/Middleware.php`

---

**Última auditoría:** 2026-04-17
**Estado:** Historial completamente limpio ✅
**Credenciales GitHub:** SEGURAS (reescritura de historial completada)
