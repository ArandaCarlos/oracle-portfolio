# Carlos Aranda - Oracle Integration Cloud Specialist Portfolio

Portfolio profesional bilingüe (Español/Inglés) para servicios freelance de Oracle Integration Cloud, PL/SQL y APEX.

## 🚀 Características

- ✅ **Diseño moderno y responsive** - Se adapta a todos los dispositivos
- ✅ **Bilingüe (ES/EN)** - Alternancia instantánea entre idiomas
- ✅ **Optimizado para SEO** - Meta tags y estructura semántica
- ✅ **Animaciones suaves** - Experiencia de usuario profesional
- ✅ **Performance optimizado** - Carga rápida y eficiente
- ✅ **100% Frontend** - No requiere backend ni base de datos

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js          # JavaScript para interactividad
└── README.md          # Esta documentación
```

## 🛠️ Instalación y Despliegue

### Opción 1: GitHub Pages (Recomendado - GRATIS)

1. **Crear repositorio en GitHub:**
   ```bash
   # Desde tu terminal
   git init
   git add .
   git commit -m "Initial commit: Oracle portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: main → / (root)
   - Save

3. **Tu sitio estará disponible en:**
   ```
   https://TU_USUARIO.github.io/TU_REPOSITORIO/
   ```

### Opción 2: Dominio Personalizado con GitHub Pages

1. **Comprar dominio (ej: carlosaranda.dev en Namecheap ~$10/año)**

2. **Configurar DNS:**
   - Tipo A → 185.199.108.153
   - Tipo A → 185.199.109.153
   - Tipo A → 185.199.110.153
   - Tipo A → 185.199.111.153
   - Tipo CNAME → www → TU_USUARIO.github.io

3. **En GitHub Settings → Pages:**
   - Custom domain: tudominio.com
   - Enforce HTTPS: ✓

### Opción 3: Netlify (GRATIS con dominio personalizado)

1. **Cuenta en Netlify (gratis):**
   - Visita: https://netlify.com

2. **Deploy:**
   ```bash
   # Instalar Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod
   ```

3. **O arrastra la carpeta en netlify.com/drop**

### Opción 4: Vercel (GRATIS)

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary: #E74C3C;        /* Color principal */
    --secondary: #3498DB;      /* Color secundario */
    --accent: #F39C12;         /* Color de acento */
}
```

### Agregar/Editar contenido
Todo el contenido está en `index.html` con atributos bilingües:
```html
<span data-es="Texto en español" data-en="Text in english">Texto en español</span>
```

### Agregar proyectos
Busca la sección `<!-- Projects Section -->` en `index.html` y duplica el bloque `.project-card`

### Modificar información de contacto
Actualiza las secciones con tus datos personales:
- Email
- Teléfono
- LinkedIn
- Ubicación

## 📱 Responsive Design

El sitio está optimizado para:
- ✅ Desktop (1920px+)
- ✅ Laptop (1200px - 1920px)
- ✅ Tablet (768px - 1200px)
- ✅ Mobile (320px - 768px)

## 🔍 SEO

El sitio incluye:
- Meta tags optimizados
- Títulos descriptivos
- Alt text en elementos visuales
- Estructura semántica HTML5
- Schema markup (puedes agregar)

## 🚀 Performance

Optimizaciones incluidas:
- CSS optimizado
- JavaScript modular
- Lazy loading preparado
- Animaciones con GPU
- Fuentes web optimizadas

## 📊 Analytics (Opcional)

Para agregar Google Analytics, añade en `<head>` de `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_ID');
</script>
```

## 🔐 Seguridad

- No hay backend, no hay vulnerabilidades de servidor
- HTTPS activado (GitHub Pages/Netlify/Vercel)
- Sin cookies, sin tracking invasivo
- Sin dependencias de terceros

## 📝 Próximos Pasos

### Después de deployar:

1. **Actualizar perfiles:**
   - LinkedIn: Agregar link al portfolio
   - Upwork: Agregar link en la bio
   - Email signature: Incluir URL

2. **SEO:**
   - Enviar sitemap a Google Search Console
   - Registrar en Bing Webmaster Tools
   - Crear backlinks desde LinkedIn

3. **Content:**
   - Escribir artículos en LinkedIn sobre proyectos
   - Compartir casos de uso técnicos
   - Publicar código de ejemplo en GitHub

4. **Expandir:**
   - Agregar blog section
   - Incluir testimonios de clientes
   - Crear calculadora de presupuestos

## 🛠️ Herramientas Complementarias

### Para crear contenido:
- **Badges certificaciones:** https://www.credly.com/
- **Iconos:** Font Awesome (ya incluido)
- **Imágenes:** Unsplash, Pexels (gratis)
- **Mockups:** Figma (gratis)

### Para optimización:
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **SSL Check:** https://www.ssllabs.com/

## 📧 Contacto

Carlos Damian Aranda
- Email: aranda.carlos.damian@gmail.com
- LinkedIn: https://www.linkedin.com/in/arandacarlosdamian/
- Ubicación: Buenos Aires, Argentina

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

---

## 🎯 Checklist Post-Deploy

- [ ] Probar sitio en diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Verificar responsive en diferentes dispositivos
- [ ] Probar alternar idiomas ES/EN
- [ ] Verificar todos los links funcionan
- [ ] Confirmar email links abren cliente de correo
- [ ] Comprobar animaciones funcionan suavemente
- [ ] Validar HTML: https://validator.w3.org/
- [ ] Validar CSS: https://jigsaw.w3.org/css-validator/
- [ ] Test de velocidad con PageSpeed Insights
- [ ] Crear perfiles en plataformas freelance
- [ ] Compartir en redes sociales
- [ ] Enviar a potenciales clientes

## 💡 Tips para Freelancing

### Precios sugeridos (USD/hora):
- **Upwork inicial:** $35-45/hora
- **Después de reviews:** $50-70/hora
- **Clientes directos:** $60-80/hora
- **Proyectos complejos:** $80-100/hora

### Keywords para Upwork:
- Oracle Integration Cloud
- OIC Developer
- PL/SQL Expert
- Oracle APEX
- ORDS
- Kafka Integration
- RIB Implementation
- Oracle Fusion
- Enterprise Integration
- REST API Development

### Estrategia:
1. Comenzar con proyectos pequeños para construir reviews
2. Aplicar a 5-10 proyectos por semana
3. Personalizar cada propuesta
4. Responder rápido (< 1 hora ideal)
5. Bajo-prometer, sobre-entregar
6. Pedir testimonios después de cada proyecto exitoso

---

**¡Éxito con tu carrera freelance Oracle!** 🚀
