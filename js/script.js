document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. MENU MOBILE (Roda em todas as páginas)
    // ==========================================
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("open");
            
            // Animação do ícone hambúrguer virando um "X"
            const bars = menuToggle.querySelectorAll(".bar");
            if(menuToggle.classList.contains("open")) {
                bars[0].style.transform = "rotate(45deg) translate(5px, 5px)";
                bars[1].style.opacity = "0";
                bars[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
            } else {
                bars[0].style.transform = "none";
                bars[1].style.opacity = "1";
                bars[2].style.transform = "none";
            }
        });
    }

    // ==========================================
    // 2. SIMULADOR (Roda APENAS na página Home)
    // ==========================================
    const simResultCard = document.getElementById("sim-result");
    
    // A trava de segurança: Só executa se o card do simulador existir na página
    if (simResultCard) {
        const simulationData = {
            dengue: {
                title: "Alerta de Risco: Dengue & Zika",
                source: "Satélite: Sentinel-3 (ESA)",
                metric: "Temp +3.2°C | Umidade Alagada",
                window: "Surto estimado em 15 dias",
                action: "Remanejando 4.500 caixas de Paracetamol, Dipirona e Sais de Reidratação Oral do CD Central para as UBS mapeadas."
            },
            colera: {
                title: "Alerta de Risco: Cólera & Leptospirose",
                source: "Satélite: GPM (NASA) - Precipitation",
                metric: "Precipitação Extrema > 180mm",
                window: "Alagamento Crítico detectado",
                action: "Liberando lotes preventivos de Antibióticos e Sais de Reidratação Oral diretamente para os hubs municipais."
            },
            respiratorio: {
                title: "Alerta de Risco: Crises Respiratórias",
                source: "Satélite: Terra/Aqua (NASA) - MODIS",
                metric: "Material Particulado PM2.5 Elevado",
                window: "Umidade < 15% + Fumaça ativa",
                action: "Disparando remessa emergencial antecipada de Broncodilatadores e Corticoides Inalatórios."
            }
        };

        const simButtons = document.querySelectorAll(".sim-btn");
        const displayTitle = document.getElementById("display-title");
        const displaySource = document.querySelector(".satellite-source");
        const displayMetric = document.getElementById("display-metric");
        const displayWindow = document.getElementById("display-window");
        const displayAction = document.getElementById("display-action");

        simButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove classe ativa de todos e adiciona no clicado
                simButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const targetKey = button.getAttribute("data-target");
                const data = simulationData[targetKey];

                // Efeito suave de transição
                simResultCard.style.opacity = "0.3";
                simResultCard.style.transform = "scale(0.99)";
                
                setTimeout(() => {
                    displayTitle.textContent = data.title;
                    displaySource.textContent = data.source;
                    displayMetric.textContent = data.metric;
                    displayWindow.textContent = data.window;
                    displayAction.textContent = data.action;
                    
                    simResultCard.style.opacity = "1";
                    simResultCard.style.transform = "none";
                }, 150);
            });
        });
    }
});