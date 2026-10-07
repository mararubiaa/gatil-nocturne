/* ==========================================================================
   Gatil Nocturne Persians — main.js
   JavaScript vanilla, sem dependências.

   1. CONFIGURAÇÃO (edite aqui: WhatsApp, Instagram, e-mail, matrizes, filhotes)
   2. Utilitários
   3. Contatos
   4. Matrizes + janela "Conhecer"
   5. Filhotes
   6. Menu mobile, header e navegação ativa
   7. FAQ (accordion)
   8. Formulário de contato
   9. Animações de entrada
   ========================================================================== */


/* ==========================================================================
   1. CONFIGURAÇÃO — EDITE AQUI
   ========================================================================== */

/**
 * >>> COLOQUE SEU NÚMERO DE WHATSAPP AQUI <<<
 * Formato: código do país + DDD + número, somente dígitos.
 * Exemplo: "5511987654321"  (55 = Brasil, 11 = DDD, 987654321 = número)
 */
const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

/**
 * >>> INSTAGRAM, E-MAIL E TEXTO EXIBIDO DO WHATSAPP <<<
 */
const CONTACT = {
  instagramUrl: "https://www.instagram.com/SEU_USUARIO/",
  instagramHandle: "@gatilnocturne",
  email: "contato@seudominio.com.br",
  whatsappDisplay: "(81) 98186-4714",
};

/**
 * FORMULÁRIO DE CONTATO
 * Deixe vazio ("") para o formulário abrir o WhatsApp com a mensagem pronta.
 * Se quiser receber por e-mail, crie um formulário gratuito em um serviço como
 * Formspree e cole aqui o endpoint (ex.: "https://formspree.io/f/abcdwxyz").
 */
const FORM_ENDPOINT = "";

/**
 * MENSAGENS AUTOMÁTICAS DO WHATSAPP
 */
const MESSAGES = {
  puppy: (nome) =>
    `Olá! Conheci o filhote ${nome} pelo site do Gatil Nocturne Persians e gostaria de consultar a disponibilidade.`,
  futureLitters:
    "Olá! Conheci o site do Gatil Nocturne Persians e gostaria de receber informações sobre futuras ninhadas.",
  general:
    "Olá! Conheci o site do Gatil Nocturne Persians e gostaria de conversar.",
};

/**
 * >>> MATRIZES <<<
 * Um objeto por matriz. Para adicionar, copie um bloco { ... } inteiro.
 * - id: identificador único, sem espaços ou acentos
 * - exemplo: true mostra a etiqueta "Dados de exemplo". Coloque false nos dados reais.
 * - nascimento: formato "AAAA-MM-DD" (será exibido como DD/MM/AAAA)
 * - foto: caminho da imagem (proporção 4:5). Se o arquivo não existir, aparece um placeholder.
 * - descricaoCompleta: texto exibido na janela "Conhecer" (opcional)
 */
const MATRIZES = [
  {
    id: "matriz-01",
    exemplo: true,
    nome: "Selene",
    raca: "Persa Doll Face",
    coloracao: "Coloração de exemplo",
    nascimento: "2023-03-12",
    descricao: "Texto de exemplo: descreva aqui, em poucas palavras, a personalidade desta matriz.",
    descricaoCompleta: "Texto de exemplo: use este espaço para contar mais sobre a história, o temperamento e as características desta matriz.",
    foto: "assets/images/matrizes/matriz-01.jpg",
    fotoAlt: "Selene, matriz Persa Doll Face do Gatil Nocturne Persians",
  },
  {
    id: "matriz-02",
    exemplo: true,
    nome: "Aurora",
    raca: "Persa Doll Face",
    coloracao: "Coloração de exemplo",
    nascimento: "2022-11-04",
    descricao: "Texto de exemplo: descreva aqui, em poucas palavras, a personalidade desta matriz.",
    descricaoCompleta: "Texto de exemplo: use este espaço para contar mais sobre a história, o temperamento e as características desta matriz.",
    foto: "assets/images/matrizes/matriz-02.jpg",
    fotoAlt: "Aurora, matriz Persa Doll Face do Gatil Nocturne Persians",
  },
  {
    id: "matriz-03",
    exemplo: true,
    nome: "Íris",
    raca: "Persa Doll Face",
    coloracao: "Coloração de exemplo",
    nascimento: "2024-01-20",
    descricao: "Texto de exemplo: descreva aqui, em poucas palavras, a personalidade desta matriz.",
    descricaoCompleta: "Texto de exemplo: use este espaço para contar mais sobre a história, o temperamento e as características desta matriz.",
    foto: "assets/images/matrizes/matriz-03.jpg",
    fotoAlt: "Íris, matriz Persa Doll Face do Gatil Nocturne Persians",
  },
];

/**
 * >>> FILHOTES <<<
 * status aceita: "Disponível", "Em avaliação" ou "Reservado"
 *   - Disponível  → mostra o botão "Consultar disponibilidade" (abre o WhatsApp)
 *   - Em avaliação → sem botão, mostra uma nota curta
 *   - Reservado   → sem botão
 * Se nenhum filhote estiver "Disponível", a mensagem
 * "Nossa próxima história ainda está sendo escrita." aparece automaticamente.
 * Para não exibir nenhum filhote, deixe a lista vazia: const FILHOTES = [];
 */
const FILHOTES = [
  {
    id: "filhote-01",
    exemplo: true,
    nome: "Lua",
    sexo: "Fêmea",
    cor: "Cor de exemplo",
    nascimento: "2026-08-15",
    pais: "Selene × Pai de exemplo",
    status: "Disponível",
    foto: "assets/images/filhotes/filhote-01.jpg",
    fotoAlt: "Lua, filhote Persa Doll Face",
  },
  {
    id: "filhote-02",
    exemplo: true,
    nome: "Orion",
    sexo: "Macho",
    cor: "Cor de exemplo",
    nascimento: "2026-08-15",
    pais: "Selene × Pai de exemplo",
    status: "Em avaliação",
    foto: "assets/images/filhotes/filhote-02.jpg",
    fotoAlt: "Orion, filhote Persa Doll Face",
  },
  {
    id: "filhote-03",
    exemplo: true,
    nome: "Estela",
    sexo: "Fêmea",
    cor: "Cor de exemplo",
    nascimento: "2026-07-02",
    pais: "Aurora × Pai de exemplo",
    status: "Reservado",
    foto: "assets/images/filhotes/filhote-03.jpg",
    fotoAlt: "Estela, filhote Persa Doll Face",
  },
];

/**
 * Textos dos status (rótulo exibido, ícone e nota opcional).
 */
const STATUS = {
  disponivel: { label: "Disponível", icon: "icon-star", note: "" },
  avaliacao: { label: "Em avaliação", icon: "icon-half", note: "Em breve, mais informações sobre este filhote." },
  reservado: { label: "Reservado", icon: "icon-moon", note: "" },
};


/* ==========================================================================
   A partir daqui não é necessário editar.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     2. UTILITÁRIOS
     ------------------------------------------------------------------------ */

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);
  }

  function whatsappLink(message) {
    const number = WHATSAPP_NUMBER.replace(/\D/g, "");
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  if (/x/i.test(WHATSAPP_NUMBER)) {
    console.warn("[Nocturne] Configure WHATSAPP_NUMBER no início de js/main.js.");
  }

  function dateMarkup(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ""));
    if (!match) return escapeHTML(value);
    return `<time datetime="${match[0]}">${match[3]}/${match[2]}/${match[1]}</time>`;
  }

  function detailsMarkup(rows) {
    const items = rows
      .filter((row) => row[1])
      .map(([label, value, isDate]) => `
        <div class="details__row">
          <dt>${escapeHTML(label)}</dt>
          <dd>${isDate ? dateMarkup(value) : escapeHTML(value)}</dd>
        </div>`)
      .join("");
    return `<dl class="details">${items}</dl>`;
  }

  function mediaMarkup(foto, alt) {
    const img = foto
      ? `<img class="media__img" src="${escapeHTML(foto)}" alt="${escapeHTML(alt)}" width="640" height="800" loading="lazy" decoding="async">`
      : "";
    return `
      <div class="media arch-frame">
        <div class="photo-placeholder" aria-hidden="true">
          <svg class="photo-placeholder__icon" width="40" height="40" focusable="false"><use href="#icon-moon-line"></use></svg>
          <span class="photo-placeholder__label">Fotografia em breve</span>
        </div>
        ${img}
      </div>`;
  }

  /* Remove imagens que não existem, deixando o placeholder visível */
  function bindImageFallbacks(root) {
    root.querySelectorAll("img.media__img").forEach((img) => {
      const fail = () => img.remove();
      if (img.complete && img.naturalWidth === 0) {
        fail();
      } else {
        img.addEventListener("error", fail, { once: true });
      }
    });
  }

  function statusKey(value) {
    const normalized = String(value || "")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase();
    if (normalized.includes("dispon")) return "disponivel";
    if (normalized.includes("reserv")) return "reservado";
    return "avaliacao";
  }

  const exampleTag = (item) => (item.exemplo ? `<p class="tag-example">Dados de exemplo</p>` : "");

  /* ------------------------------------------------------------------------
     3. CONTATOS
     ------------------------------------------------------------------------ */

  function setupContacts() {
    const hrefs = {
      instagram: CONTACT.instagramUrl,
      whatsapp: whatsappLink(MESSAGES.general),
      email: `mailto:${CONTACT.email}`,
    };
    const values = {
      instagram: CONTACT.instagramHandle,
      whatsapp: CONTACT.whatsappDisplay,
      email: CONTACT.email,
    };

    document.querySelectorAll("[data-contact]").forEach((el) => {
      const href = hrefs[el.dataset.contact];
      if (href) el.href = href;
    });

    document.querySelectorAll("[data-contact-value]").forEach((el) => {
      const value = values[el.dataset.contactValue];
      if (value) el.textContent = value;
    });
  }

  /* ------------------------------------------------------------------------
     4. MATRIZES + JANELA "CONHECER"
     ------------------------------------------------------------------------ */

  function matrizDetails(m) {
    return detailsMarkup([
      ["Raça", m.raca],
      ["Coloração", m.coloracao],
      ["Nascimento", m.nascimento, true],
    ]);
  }

  function renderMatrizes() {
    const list = document.getElementById("lista-matrizes");
    if (!list) return;

    list.innerHTML = MATRIZES.map((m) => `
      <li class="card reveal">
        <article class="card__inner" aria-labelledby="titulo-${escapeHTML(m.id)}">
          ${mediaMarkup(m.foto, m.fotoAlt || m.nome)}
          <div class="card__body">
            <h3 class="card__title" id="titulo-${escapeHTML(m.id)}">${escapeHTML(m.nome)}</h3>
            ${exampleTag(m)}
            ${matrizDetails(m)}
            <p class="card__text">${escapeHTML(m.descricao)}</p>
            <div class="card__actions">
              <button class="btn btn--text" type="button" data-open-matriz="${escapeHTML(m.id)}" aria-haspopup="dialog">
                Conhecer<span class="visually-hidden"> ${escapeHTML(m.nome)}</span>
                <svg class="btn__arrow" aria-hidden="true" focusable="false"><use href="#icon-arrow"></use></svg>
              </button>
            </div>
          </div>
        </article>
      </li>`).join("");

    bindImageFallbacks(list);
  }

  function setupModal() {
    const modal = document.getElementById("modal-matriz");
    if (!modal || typeof modal.showModal !== "function") return;

    const media = modal.querySelector(".modal__media");
    const title = modal.querySelector(".modal__title");
    const details = modal.querySelector(".modal__details");
    const text = modal.querySelector(".modal__text");
    let trigger = null;

    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-open-matriz]");
      if (!button) return;

      const matriz = MATRIZES.find((m) => m.id === button.dataset.openMatriz);
      if (!matriz) return;

      trigger = button;
      media.innerHTML = mediaMarkup(matriz.foto, matriz.fotoAlt || matriz.nome);
      bindImageFallbacks(media);
      title.textContent = matriz.nome;
      details.innerHTML = matrizDetails(matriz);
      text.textContent = matriz.descricaoCompleta || matriz.descricao;
      modal.showModal();
    });

    modal.querySelectorAll("[data-close-modal]").forEach((el) => {
      el.addEventListener("click", () => modal.close());
    });

    /* Clique fora do conteúdo (no fundo escurecido) fecha a janela */
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.close();
    });

    modal.addEventListener("close", () => {
      if (trigger && document.contains(trigger)) trigger.focus();
    });
  }

  /* ------------------------------------------------------------------------
     5. FILHOTES
     ------------------------------------------------------------------------ */

  function renderFilhotes() {
    const list = document.getElementById("lista-filhotes");
    const empty = document.getElementById("filhotes-vazio");
    const emptyCta = document.getElementById("cta-futuras-ninhadas");
    if (!list) return;

    list.innerHTML = FILHOTES.map((f) => {
      const key = statusKey(f.status);
      const status = STATUS[key];
      const nome = escapeHTML(f.nome);

      let action = "";
      if (key === "disponivel") {
        action = `
          <div class="card__actions">
            <a class="btn btn--primary btn--block" href="${escapeHTML(whatsappLink(MESSAGES.puppy(f.nome)))}" target="_blank" rel="noopener noreferrer">
              Consultar disponibilidade<span class="visually-hidden"> de ${nome} (abre o WhatsApp em uma nova aba)</span>
            </a>
          </div>`;
      } else if (status.note) {
        action = `<p class="card__note">${escapeHTML(status.note)}</p>`;
      }

      return `
        <li class="card card--puppy reveal">
          <article class="card__inner" aria-labelledby="titulo-${escapeHTML(f.id)}">
            ${mediaMarkup(f.foto, f.fotoAlt || f.nome)}
            <div class="card__body">
              <h3 class="card__title" id="titulo-${escapeHTML(f.id)}">${nome}</h3>
              <p class="status status--${key}">
                <svg class="status__icon" aria-hidden="true" focusable="false"><use href="#${status.icon}"></use></svg>
                <span class="visually-hidden">Status: </span>${escapeHTML(status.label)}
              </p>
              ${exampleTag(f)}
              ${detailsMarkup([
                ["Sexo", f.sexo],
                ["Cor", f.cor],
                ["Nascimento", f.nascimento, true],
                ["Pais", f.pais],
              ])}
              ${action}
            </div>
          </article>
        </li>`;
    }).join("");

    bindImageFallbacks(list);

    const hasAvailable = FILHOTES.some((f) => statusKey(f.status) === "disponivel");
    list.hidden = FILHOTES.length === 0;

    if (empty) {
      empty.hidden = hasAvailable;
      if (emptyCta) emptyCta.href = whatsappLink(MESSAGES.futureLitters);
    }
  }

  /* ------------------------------------------------------------------------
     6. MENU MOBILE, HEADER E NAVEGAÇÃO ATIVA
     ------------------------------------------------------------------------ */

  function setupNavigation() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("menu-principal");
    const mobileQuery = window.matchMedia("(max-width: 992px)");

    if (toggle && nav) {
      const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

      const setMenu = (open, returnFocus) => {
        toggle.setAttribute("aria-expanded", String(open));
        nav.classList.toggle("is-open", open);
        if (!open && returnFocus) toggle.focus();
      };

      toggle.addEventListener("click", () => setMenu(!isOpen()));

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && isOpen()) setMenu(false, true);
      });

      document.addEventListener("click", (event) => {
        if (isOpen() && !header.contains(event.target)) setMenu(false);
      });

      nav.addEventListener("click", (event) => {
        if (event.target.closest("a") && mobileQuery.matches) setMenu(false);
      });

      /* Fecha o menu se o foco sair dele pelo teclado */
      nav.addEventListener("focusout", (event) => {
        if (mobileQuery.matches && isOpen() && !header.contains(event.relatedTarget)) {
          setMenu(false);
        }
      });

      mobileQuery.addEventListener("change", () => setMenu(false));
    }

    /* Linha sutil no header ao rolar */
    if (header) {
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* Destaca o item do menu da seção visível */
    const links = Array.from(document.querySelectorAll(".site-nav__link"));
    if (!("IntersectionObserver" in window) || !links.length) return;

    const byId = new Map(links.map((link) => [link.hash.slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.removeAttribute("aria-current"));
        const active = byId.get(entry.target.id);
        if (active) active.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    byId.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------------
     7. FAQ (ACCORDION)
     ------------------------------------------------------------------------ */

  function setupFaq() {
    document.querySelectorAll(".faq__trigger").forEach((button) => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      if (!panel) return;

      /* Sem JS as respostas ficam abertas; com JS começam fechadas */
      button.setAttribute("aria-expanded", "false");
      panel.hidden = true;

      button.addEventListener("click", () => {
        const open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
    });
  }

  /* ------------------------------------------------------------------------
     8. FORMULÁRIO DE CONTATO
     ------------------------------------------------------------------------ */

  function setupForm() {
    const form = document.getElementById("form-contato");
    if (!form) return;

    const status = document.getElementById("form-status");
    const note = document.getElementById("form-nota");
    const submit = form.querySelector('[type="submit"]');
    let attempted = false;

    if (FORM_ENDPOINT && note) {
      note.textContent = "Responderemos pelo contato informado assim que possível.";
    }

    const rules = {
      nome: (v) => (v.length >= 2 ? "" : "Informe seu nome."),
      contato: (v) => {
        if (!v) return "Informe seu WhatsApp ou e-mail.";
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        const isPhone = v.replace(/\D/g, "").length >= 10;
        return isEmail || isPhone ? "" : "Informe um e-mail válido ou um WhatsApp com DDD.";
      },
      assunto: (v) => (v ? "" : "Selecione um assunto."),
      mensagem: (v) => (v.length >= 10 ? "" : "Escreva uma mensagem com pelo menos 10 caracteres."),
    };

    function validateField(field) {
      const rule = rules[field.name];
      if (!rule) return true;
      const message = rule(field.value.trim());
      const error = document.getElementById(field.getAttribute("aria-describedby"));

      if (message) {
        field.setAttribute("aria-invalid", "true");
        if (error) {
          error.textContent = message;
          error.hidden = false;
        }
        return false;
      }

      field.removeAttribute("aria-invalid");
      if (error) {
        error.textContent = "";
        error.hidden = true;
      }
      return true;
    }

    form.addEventListener("input", (event) => {
      if (attempted) validateField(event.target);
    });

    form.addEventListener("change", (event) => {
      if (attempted) validateField(event.target);
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      attempted = true;

      const fields = Array.from(form.querySelectorAll("[name]"));
      const invalid = fields.filter((field) => !validateField(field));

      if (invalid.length) {
        status.textContent = "Revise os campos destacados.";
        invalid[0].focus();
        return;
      }

      const data = Object.fromEntries(fields.map((f) => [f.name, f.value.trim()]));

      /* Opção A: envio para um serviço de formulários */
      if (FORM_ENDPOINT) {
        submit.disabled = true;
        status.textContent = "Enviando…";
        try {
          const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(form),
          });
          if (!response.ok) throw new Error(response.statusText);
          form.reset();
          attempted = false;
          status.textContent = "Mensagem enviada com sucesso. Agradecemos o contato!";
        } catch (error) {
          status.textContent = "Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.";
        } finally {
          submit.disabled = false;
        }
        return;
      }

      /* Opção B (padrão): abre o WhatsApp com a mensagem pronta */
      const message =
        `Olá! Meu nome é ${data.nome}.\n` +
        `Assunto: ${data.assunto}\n` +
        `Contato: ${data.contato}\n\n` +
        `${data.mensagem}`;
      const link = whatsappLink(message);

      window.open(link, "_blank", "noopener");

      status.textContent = "Abrimos o WhatsApp com a sua mensagem. Se nada aconteceu, ";
      const fallback = document.createElement("a");
      fallback.href = link;
      fallback.target = "_blank";
      fallback.rel = "noopener noreferrer";
      fallback.textContent = "clique aqui para abrir";
      status.append(fallback, ".");
    });
  }

  /* ------------------------------------------------------------------------
     9. ANIMAÇÕES DE ENTRADA (fade + translateY discretos)
     ------------------------------------------------------------------------ */

  function setupReveal() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    elements.forEach((el) => observer.observe(el));
    document.documentElement.classList.add("reveal-ready");
  }

  /* ------------------------------------------------------------------------
     INICIALIZAÇÃO
     ------------------------------------------------------------------------ */

  setupContacts();
  renderMatrizes();
  renderFilhotes();
  setupModal();
  setupNavigation();
  setupFaq();
  setupForm();
  setupReveal();
})();
