       const roadmapData = {
            title: "Roadmap Intensivo de Tailwind CSS: De Cero a Avanzado en 3 Semanas",
            introduction: "Esta aplicación interactiva te ayudará a seguir el plan de estudio intensivo de 3 semanas para aprender Tailwind CSS. Marca tus tareas completadas y observa tu progreso.",
            weeks: [
                {
                    id: "week1",
                    title: "Semana 1: Fundamentos y Primeros Pasos",
                    introduction: "Esta sección cubre la Semana 1 de tu aprendizaje de Tailwind CSS. Aquí encontrarás los objetivos diarios y las tareas clave. El objetivo principal es comprender la filosofía de Tailwind y dominar las utilidades básicas. Marca cada día como completado para seguir tu progreso.",
                    days: [
                        { day: 1, objective: "Introducción a Tailwind CSS", details: "Qué es Tailwind y por qué usarlo. Filosofía utility-first. Diferencias con CSS tradicional o frameworks como Bootstrap. Instalar Tailwind (CDN vs. instalación local). Practicar con el CDN en un HTML simple. Ejercicio: Reproducir una tarjeta básica (título, imagen, descripción, botón).", completed: false },
                        { day: 2, objective: "Layout básico", details: "Clases de espaciado: padding, margin, space-*. Display: flex, grid, block, inline-block. Contenedores y ancho (w-*, max-w-*, container). Ejercicio: Crear un layout de 2 columnas con flex.", completed: false },
                        { day: 3, objective: "Tipografía y colores", details: "Estilos de texto: text-*, font-*, leading-*, tracking-*. Paleta de colores. Fondo y texto (bg-*, text-*). Ejercicio: Crear una sección con título, subtítulo y párrafo con estilos.", completed: false },
                        { day: 4, objective: "Bordes, sombras y redondeo", details: "border, rounded, shadow, ring. Hover/focus y variantes responsivas. Ejercicio: Tarjeta interactiva con hover.", completed: false },
                        { day: 5, objective: "Sistema responsive de Tailwind", details: "Breakpoints (sm, md, lg, xl, 2xl). Aplicar estilos diferentes por pantalla. Ejercicio: Sección responsive que cambia layout y tamaños.", completed: false },
                        { day: 6, objective: "Pseudo-clases y dark mode", details: "hover:, focus:, active:, group-hover:, etc. Configurar y usar dark:. Ejercicio: Tarjeta que cambia color en modo oscuro.", completed: false },
                        { day: 7, objective: "Proyecto mini: landing page básica", details: "Hero, secciones, llamadas a la acción. Mobile-first con diseño limpio.", completed: false }
                    ]
                },
                {
                    id: "week2",
                    title: "Semana 2: Componentes, Diseño Moderno y Personalización",
                    introduction: "Bienvenido a la Semana 2. El objetivo es crear componentes reusables y dominar el diseño avanzado con Tailwind CSS. Completa cada día para avanzar hacia la maestría.",
                    days: [
                        { day: 8, objective: "Componentes comunes", details: "Botones, tarjetas, navbars, modales. Usar @apply para estilos en CSS. Ejercicio: Crear una librería básica de componentes.", completed: false },
                        { day: 9, objective: "Formularios y estados", details: "Inputs, selects, checkboxes, switches. form plugin y clases útiles. Ejercicio: Formulario completo con validaciones básicas y estados visuales.", completed: false },
                        { day: 10, objective: "Animaciones y transiciones", details: "transition, duration, ease-*, animate-*. Uso con estados interactivos. Ejercicio: Modal animado y botón con transición.", completed: false },
                        { day: 11, objective: "Grid y layouts avanzados", details: "grid, grid-cols-*, gap-*, place-*. Layouts de tarjetas, galería de imágenes, etc. Ejercicio: Galería responsive de imágenes con grid.", completed: false },
                        { day: 12, objective: "Customización", details: "Configurar tailwind.config.js. Extender colores, tamaños, fuentes. Agregar plugins (forms, typography, aspect-ratio). Ejercicio: Crear tu propia paleta y fuente personalizada.", completed: false },
                        { day: 13, objective: "Integración en proyectos reales", details: "Tailwind con frameworks (React, Vue, Svelte, etc.). Tailwind + Vite + PostCSS. Ejercicio: Setup de un mini proyecto con React + Tailwind.", completed: false },
                        { day: 14, objective: "Proyecto medio: dashboard responsivo", details: "Sidebar, header, tarjetas, tablas. Modo oscuro, responsive y detalles interactivos.", completed: false }
                    ]
                },
                {
                    id: "week3",
                    title: "Semana 3: Dominio Avanzado, Optimización y Portafolio",
                    introduction: "Estás en la Semana 3, la recta final. Aquí consolidarás conocimientos y prepararás proyectos sólidos, enfocándote en optimización y buenas prácticas.",
                    days: [
                        { day: 15, objective: "Accesibilidad (a11y)", details: "Buenas prácticas en accesibilidad. Usar clases que mejoren navegación y contraste.", completed: false },
                        { day: 16, objective: "Prácticas recomendadas", details: "Arquitectura de clases. Uso de @layer y @apply. Evitar repetición innecesaria.", completed: false },
                        { day: 17, objective: "Optimización y rendimiento", details: "Purge de CSS (Tree-shaking). Minimización. Lighthouse performance.", completed: false },
                        { day: 18, objective: "Animaciones complejas con Framer Motion o Headless UI", details: "Componentes accesibles e interactivos. Integración con Tailwind.", completed: false },
                        { day: 19, day_end: 20, objective: "Proyecto grande: sitio web completo (Días 19-20)", details: "Estilo limpio y profesional. Múltiples secciones (hero, productos, contacto, etc). Responsive, dark mode y componentes reutilizables.", completed: false },
                        { day: 21, objective: "Publicación y portafolio", details: "Subir proyecto a GitHub y Vercel/Netlify. Documentar tu aprendizaje. Bonus: Crea un portfolio personal con Tailwind.", completed: false }
                    ]
                }
            ],
            extraTips: {
                id: "extraTips",
                title: "🧠 Consejos Extra",
                introduction: "Esta sección contiene consejos adicionales para ayudarte a maximizar tu aprendizaje y dominio de Tailwind CSS. ¡Aprovéchalos!",
                tips: [
                    "Revisa la documentación oficial: Es tu mejor amiga y la fuente más actualizada.",
                    "Usa herramientas como Tailwind Play: Ideal para experimentar rápidamente con clases y configuraciones sin un proyecto completo.",
                    "Inspírate en sitios como tailwindcomponents.com y tailwindui.com: Para ideas de diseño, componentes y cómo otros resuelven problemas comunes.",
                    "Practica, practica, practica: La clave es la aplicación constante de lo aprendido en proyectos pequeños y grandes.",
                    "Únete a comunidades: Comparte tus dudas y aprendizajes con otros desarrolladores que usan Tailwind CSS.",
                    "Experimenta con la configuración: No tengas miedo de modificar `tailwind.config.js` para adaptar Tailwind a tus necesidades específicas."
                ]
            }
        };

        const contentArea = document.getElementById('contentArea');
        const mainTitle = document.getElementById('mainTitle');
        const mainIntroduction = document.getElementById('mainIntroduction');
        const overallProgressBar = document.getElementById('overallProgressBar');
        const tabs = document.querySelectorAll('.tab-button');
        let currentTab = 'week1';

        function loadState() {
            const savedState = localStorage.getItem('tailwindRoadmapState');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                roadmapData.weeks.forEach(week => {
                    week.days.forEach(day => {
                        const savedDay = parsedState.weeks.find(sw => sw.id === week.id)?.days.find(sd => sd.day === day.day);
                        if (savedDay) {
                            day.completed = savedDay.completed;
                        }
                    });
                });
            }
        }

        function saveState() {
            const stateToSave = {
                weeks: roadmapData.weeks.map(week => ({
                    id: week.id,
                    days: week.days.map(day => ({ day: day.day, completed: day.completed }))
                }))
            };
            localStorage.setItem('tailwindRoadmapState', JSON.stringify(stateToSave));
        }


        function calculateProgress(weekId) {
            const week = roadmapData.weeks.find(w => w.id === weekId);
            if (!week || !week.days) return 0;
            const totalDays = week.days.length;
            if (totalDays === 0) return 0;
            const completedDays = week.days.filter(day => day.completed).length;
            return (completedDays / totalDays) * 100;
        }

        function calculateOverallProgress() {
            const allDays = roadmapData.weeks.reduce((acc, week) => acc.concat(week.days), []);
            if (allDays.length === 0) return 0;
            const completedDays = allDays.filter(day => day.completed).length;
            return (completedDays / allDays.length) * 100;
        }

        function updateOverallProgressBar() {
            const progress = calculateOverallProgress();
            overallProgressBar.style.width = `${progress.toFixed(0)}%`;
            overallProgressBar.textContent = `${progress.toFixed(0)}%`;
        }
        
        function applyFadeInAnimation(element) {
            element.classList.add('content-fade-enter');
            requestAnimationFrame(() => {
                element.classList.add('content-fade-enter-active');
            });
            element.addEventListener('transitionend', () => {
                element.classList.remove('content-fade-enter', 'content-fade-enter-active');
            }, { once: true });
        }

        function renderWeek(weekId) {
            const week = roadmapData.weeks.find(w => w.id === weekId);
            if (!week) return;

            contentArea.innerHTML = ''; 
            const weekContainer = document.createElement('div');
            
            const header = document.createElement('div');
            header.className = 'mb-6 p-4 bg-sky-50 rounded-lg border border-sky-200';
            header.innerHTML = `
                <h2 class="text-2xl font-semibold text-sky-700">${week.title}</h2>
                <p class="mt-1 text-sm text-slate-600">${week.introduction}</p>
            `;
            weekContainer.appendChild(header);

            const progressPercentage = calculateProgress(weekId);
            const progressBarContainer = document.createElement('div');
            progressBarContainer.className = 'mb-6';
            progressBarContainer.innerHTML = `
                <div class="flex justify-between text-sm font-medium text-slate-600 mb-1">
                    <span>Progreso de la Semana</span>
                    <span id="progressText-${weekId}">${progressPercentage.toFixed(0)}%</span>
                </div>
                <div class="w-full progress-bar-bg rounded-full h-4 overflow-hidden">
                    <div id="progressBar-${weekId}" class="progress-bar-fill h-full rounded-full" style="width: ${progressPercentage.toFixed(0)}%;"></div>
                </div>
            `;
            weekContainer.appendChild(progressBarContainer);

            const daysGrid = document.createElement('div');
            daysGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
            
            week.days.forEach(day => {
                const dayCard = document.createElement('div');
                dayCard.className = `p-5 rounded-lg shadow-md border transition-all duration-300 ${day.completed ? 'task-completed border-green-300 bg-green-50' : 'bg-white border-slate-200 hover:shadow-lg'}`;
                dayCard.id = `day-${week.id}-${day.day}`;
                
                let dayTitle = `Día ${day.day}`;
                if (day.day_end) {
                    dayTitle = `Días ${day.day}-${day.day_end}`;
                }

                dayCard.innerHTML = `
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="text-lg font-semibold ${day.completed ? 'text-green-700' : 'text-sky-700'}">${dayTitle}: ${day.objective}</h3>
                        <input type="checkbox" data-weekid="${week.id}" data-day="${day.day}" class="form-checkbox h-5 w-5 text-sky-600 border-slate-300 rounded focus:ring-sky-500 cursor-pointer" ${day.completed ? 'checked' : ''}>
                    </div>
                    <p class="text-sm text-slate-600 ${day.completed ? 'text-slate-500' : ''}">${day.details}</p>
                `;
                daysGrid.appendChild(dayCard);
            });
            weekContainer.appendChild(daysGrid);
            contentArea.appendChild(weekContainer);
            applyFadeInAnimation(weekContainer);

            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', handleCheckboxChange);
            });
            updateOverallProgressBar();
        }

        function renderExtraTips() {
            const tipsData = roadmapData.extraTips;
            contentArea.innerHTML = ''; 
            const tipsContainer = document.createElement('div');

            const header = document.createElement('div');
            header.className = 'mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200';
            header.innerHTML = `
                <h2 class="text-2xl font-semibold text-amber-700">${tipsData.title}</h2>
                <p class="mt-1 text-sm text-slate-600">${tipsData.introduction}</p>
            `;
            tipsContainer.appendChild(header);

            const ul = document.createElement('ul');
            ul.className = 'list-disc list-inside space-y-3 pl-2 text-slate-700';
            tipsData.tips.forEach(tipText => {
                const li = document.createElement('li');
                li.className = 'text-sm leading-relaxed';
                li.textContent = tipText;
                ul.appendChild(li);
            });
            tipsContainer.appendChild(ul);
            contentArea.appendChild(tipsContainer);
            applyFadeInAnimation(tipsContainer);
        }
        
        function handleCheckboxChange(event) {
            const checkbox = event.target;
            const weekId = checkbox.dataset.weekid;
            const dayNumber = parseInt(checkbox.dataset.day);

            const week = roadmapData.weeks.find(w => w.id === weekId);
            const day = week.days.find(d => d.day === dayNumber);
            day.completed = checkbox.checked;

            const dayCard = document.getElementById(`day-${weekId}-${dayNumber}`);
            const dayCardTitle = dayCard.querySelector('h3');
            const dayCardText = dayCard.querySelector('p');

            if (day.completed) {
                dayCard.classList.add('task-completed', 'border-green-300', 'bg-green-50');
                dayCard.classList.remove('bg-white', 'border-slate-200', 'hover:shadow-lg');
                dayCardTitle.classList.add('text-green-700');
                dayCardTitle.classList.remove('text-sky-700');
                dayCardText.classList.add('text-slate-500');
            } else {
                dayCard.classList.remove('task-completed', 'border-green-300', 'bg-green-50');
                dayCard.classList.add('bg-white', 'border-slate-200', 'hover:shadow-lg');
                dayCardTitle.classList.remove('text-green-700');
                dayCardTitle.classList.add('text-sky-700');
                dayCardText.classList.remove('text-slate-500');
            }
            
            const progress = calculateProgress(weekId);
            const progressBar = document.getElementById(`progressBar-${weekId}`);
            const progressText = document.getElementById(`progressText-${weekId}`);
            if(progressBar) progressBar.style.width = `${progress.toFixed(0)}%`;
            if(progressText) progressText.textContent = `${progress.toFixed(0)}%`;
            
            updateOverallProgressBar();
            saveState();
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                currentTab = tab.dataset.tab;
                tabs.forEach(t => t.classList.remove('tab-active'));
                tab.classList.add('tab-active');
                if (currentTab === 'extraTips') {
                    renderExtraTips();
                } else {
                    renderWeek(currentTab);
                }
            });
        });
        
        function initializeApp() {
            mainTitle.textContent = roadmapData.title;
            mainIntroduction.textContent = roadmapData.introduction;
            loadState();
            document.getElementById('tabWeek1').click(); 
            updateOverallProgressBar();
        }

        initializeApp();
