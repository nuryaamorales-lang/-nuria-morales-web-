# NURIA MORALES — AUDITORÍA FASE 1
## Antes de la auditoría: 3 contradicciones directas con lo ya construido hoy

Estas tres cosas se decidieron y se publicaron en esta misma sesión, y el nuevo brief pide justo lo contrario. Marco esto ahora porque cambia el alcance real de la Fase 1 — no es solo "mejorar", es revertir decisiones de hoy.

### 1. Idioma: español → inglés
Toda la web actual está en español (HABLEMOS, INICIAR CONVERSACIÓN, CONSULTORA ESTRATÉGICA DE MARKETING). Este brief escribe casi todo el copy de ejemplo en inglés (LET'S TALK, STRATEGIC MARKETING CONSULTANCY, YOUR MARKETING IS BUSY BUT NOT STRATEGIC). Esto no es un matiz de estilo — es un cambio de mercado objetivo (¿hablas a España/LATAM o a un público internacional?). Necesito que esto esté resuelto antes de tocar copy, porque reescribir todo dos veces cuesta el doble.

### 2. Selected Work: Sweet Hotels
El brief dice explícitamente **"NO mostrar actualmente Sweet Hotels"**. Ahora mismo está publicado en `/proyectos/sweet-hotels` como "Strategic Analysis". Si sigo la instrucción nueva, hay que retirarlo de la web ya en producción.

### 3. Fotografía del hero
El brief dice **"No utilizar fotografías de stock genéricas"** y **"no utilizar mujeres aleatorias con portátiles"**, y pide una fotografía editorial real de Nuria. La foto que pusimos hoy en el hero (portátil rosa, flores, escritorio de mármol) es exactamente el tipo de imagen genérica que este documento pide evitar — coincide con la primera objeción que yo misma planteé antes de ponerla, cuando dijiste que la usaras igualmente.

**Antes de auditar el resto, necesito saber:** ¿confirmas estos tres cambios (inglés, quitar Sweet Hotels, quitar la foto de stock del hero) o alguno de ellos se queda como está?

---

# AUDITORÍA — ESTADO ACTUAL

| Área | Estado | Decisión | Por qué |
|---|---|---|---|
| **Branding (color)** | Rosa Pétalo acento, blanco/beige/gris dominante | **KEEP** | Ya coincide con lo pedido en este brief — sin conflicto |
| **Tipografía** | Bodoni Moda + Jost + Cinzel (acento) | **KEEP** | Coincide exactamente con el sistema pedido |
| **Positioning (texto)** | "Antes de hacer más marketing, hay que entender mejor el negocio" | **KEEP** | Es el mismo statement que este brief quiere conservar |
| **Hero — foto** | Stock genérico (portátil + flores) | **CHANGE** | Contradice sección 09 del brief; sustituir por placeholder editorial elegante hasta tener foto real de Nuria |
| **Hero — estructura** | Foto de fondo + texto superpuesto con scrim | **CHANGE** | El brief pide una composición editorial de alto impacto, no el patrón "foto+texto+botones" convencional que tenemos ahora |
| **Selected Work — Sweet Hotels** | Publicado como Strategic Analysis | **REMOVE** (pendiente tu confirmación) | Instrucción explícita del brief |
| **Selected Work — sección completa** | Visible con 2 proyectos (uno placeholder) | **CHANGE** | El brief sugiere ocultarla o dejarla muy discreta ("A growing collection of strategic projects") hasta tener casos reales |
| **Navegación** | About / Consulting / Selected Work / Insights | **CHANGE** | El brief separa AI Search como ítem propio del menú, y Selected Work pasa a ser condicional |
| **CTA / copy botones** | HABLEMOS, INICIAR CONVERSACIÓN | **CHANGE** (si se confirma inglés) | Depende de la decisión de idioma del punto 1 |
| **"What I do" (4 territorios)** | Strategy / Positioning & Branding / Growth & CJ / AI & Search | **KEEP** (con copy revisado) | La estructura ya coincide con "Strategy · Branding · Growth · AI Search" del brief |
| **Metodología** | Understand → Diagnose → Strategize → Activate, 4 bloques simples | **CHANGE** | El brief pide presentación editorial y propietaria, no "cuatro tarjetas genéricas" — hay que rediseñar esta sección, no solo el texto |
| **About** | Texto placeholder genérico | **CHANGE** | Falta la narrativa "THE WOMAN BEHIND THE STRATEGY" — es un rediseño de contenido, no solo de copy |
| **Problem/Insight section** | Un único bloque "Quizá tu problema no sea..." | **CHANGE** | El brief pide 4 problemas numerados tipo "WHAT ARE YOU TRYING TO SOLVE?" — estructura distinta |
| **AI Search** | Página propia con 7 fases | **KEEP** | Ya cumple lo que pide el brief — sin conflicto |
| **Credentials** | Formación + ABSM en 3 líneas | **KEEP** | Coincide con lo pedido, sin muro de diplomas |
| **CMS / Editabilidad** | Decap CMS (Astro Content Collections + Git Gateway) ya funcionando | **KEEP** | Es exactamente la opción A que el brief pide evaluar — ya implementada y en uso hoy |
| **SEO técnico** | Sitemap, canonical, OG, structured data (Person/Article) | **KEEP**, **ADD** ProfessionalService y WebSite schema | Falta añadir dos tipos de schema que el brief pide explícitamente |
| **AI Search / GEO arquitectura** | Entidad clara en Person schema, página temática propia | **KEEP** | Ya resuelto |
| **Newsletter** | "The Strategic Note" con formulario preparado | **KEEP** | Coincide, sin conexión a herramienta de email todavía (correcto, así lo pide el brief) |
| **Mobile** | Responsive por breakpoints estándar | **CHANGE** | El brief pide mobile como experiencia propia, no solo "reducir desktop" — revisión necesaria, no auditada a fondo hoy |
| **Performance** | Astro estático, CSS propio, mínimo JS | **KEEP** | Ya cumple los principios pedidos |
| **Accesibilidad** | Semantic HTML, skip link, focus states, reduced motion | **KEEP** | Ya implementado en el layout base |
| **Contact** | "Hablemos" con formulario nombre/email/mensaje | **CHANGE** (si se confirma inglés) | Falta el campo "Company" que pide el brief; depende también de idioma |

---

## Lo que NO se puede auditar todavía (falta información real, no ficticia)
- Fotografía editorial real de Nuria — sin esto, el Hero, About e Insights covers siguen en placeholder por diseño, tal como exige la sección 36 del brief (nada inventado).
- Casos de Selected Work reales — sin clientes autorizados que mostrar, la sección se queda discreta u oculta.

## Preguntas antes de pasar a Dirección Creativa (máx. las que pide el brief)
1. **Idioma final: español o inglés** — determina todo el copy de aquí en adelante.
2. **Sweet Hotels: lo retiro ya de la web en producción, o lo dejamos mientras decides del todo** — está publicado ahora mismo y es visible públicamente.
3. **Foto del hero: la sustituyo por un placeholder elegante ya (perdiendo la foto de hoy), o la dejamos de forma temporal hasta que tengas la sesión de fotos real** — afecta a si "reconstruimos" o "retrocedemos" un trabajo de hoy mismo.
