# Gatil Nocturne Persians — site institucional

Site one page do Gatil Nocturne Persians, especializado em Persas Doll Face.
Feito com HTML5 semântico, CSS3 e JavaScript vanilla, sem dependências. Pronto para o GitHub Pages.

## Estrutura

```
/
├── index.html                 Estrutura e textos de todas as seções
├── css/
│   └── style.css              Estilos (tokens, base, componentes, seções, responsivo)
├── js/
│   └── main.js                Configuração (WhatsApp, Instagram, matrizes, filhotes) + interações
├── assets/
│   ├── favicon/
│   │   └── favicon.svg        Favicon provisório (substitua)
│   ├── logo/
│   │   ├── logo-principal.png     (adicione: usada no rodapé)
│   │   ├── logo-horizontal.png    (adicione: usada no header)
│   │   └── simbolo-nocturne.png   (adicione: usado na seção "Cuidado Nocturne")
│   └── images/
│       ├── hero/              hero-persa.jpg
│       ├── matrizes/          matriz-01.jpg, matriz-02.jpg, ...
│       ├── filhotes/          filhote-01.jpg, filhote-02.jpg, ...
│       └── og/                og-image.jpg (1200 × 630, imagem de compartilhamento)
└── README.md
```

Enquanto um arquivo de imagem ou logo não existir, o site mostra um placeholder elegante
(ou o nome da marca em texto, no caso da logo). Basta colocar o arquivo com o nome certo.

## Onde editar

| O quê | Onde |
|---|---|
| Número do WhatsApp | `js/main.js` → `const WHATSAPP_NUMBER = "55XXXXXXXXXXX";` |
| Instagram, e-mail, WhatsApp exibido | `js/main.js` → objeto `CONTACT` |
| Matrizes | `js/main.js` → lista `MATRIZES` |
| Filhotes e status | `js/main.js` → lista `FILHOTES` (campo `status`) |
| Mensagens automáticas do WhatsApp | `js/main.js` → objeto `MESSAGES` |
| Textos das seções, FAQ, Cuidado Nocturne | `index.html` (procure os comentários `EDITAR`) |
| Cores e fontes | `css/style.css` → bloco `:root` |
| SEO, canonical, Open Graph | `<head>` do `index.html` |

### Imagens recomendadas

- Hero: `assets/images/hero/hero-persa.jpg` — proporção 4:5 (ex.: 1080 × 1350 px)
- Matrizes e filhotes: proporção 4:5 (ex.: 800 × 1000 px), JPG ou WebP, até ~200 KB
- Logos: PNG com fundo transparente

### Status dos filhotes

No campo `status` de cada filhote use exatamente um destes:

- `"Disponível"` — mostra o botão **Consultar disponibilidade** (abre o WhatsApp com o nome do filhote)
- `"Em avaliação"` — sem botão
- `"Reservado"` — sem botão

Se nenhum filhote estiver `"Disponível"`, a mensagem *"Nossa próxima história ainda está sendo escrita."* aparece automaticamente.

Remova a etiqueta "Dados de exemplo" trocando `exemplo: true` por `exemplo: false`.

## Formulário de contato

Por padrão, o formulário abre o WhatsApp com a mensagem pronta (o GitHub Pages não processa formulários).
Para receber por e-mail, crie um formulário no Formspree (ou similar) e cole o endpoint em
`const FORM_ENDPOINT = "";` no `js/main.js`.

## Publicar no GitHub Pages

1. Crie uma conta em github.com (se ainda não tiver).
2. Clique em **New repository**, dê um nome (ex.: `nocturne-persians`) e marque **Public**.
3. Na página do repositório, clique em **Add file → Upload files** e arraste **todo o conteúdo** desta pasta
   (`index.html`, `css`, `js`, `assets`, `README.md`). Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em **Source**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e salve.
5. Em 1–2 minutos o site estará em `https://SEU-USUARIO.github.io/nocturne-persians/`.
6. Volte ao `index.html` e troque as URLs de `canonical`, `og:url` e `og:image` pelo endereço final.

Domínio próprio (opcional): em **Settings → Pages → Custom domain**, informe o domínio e configure o DNS
conforme a documentação do GitHub Pages.

## Testar localmente

Abra o `index.html` no navegador. Para testar exatamente como no servidor, rode na pasta do projeto:

```bash
python -m http.server 8000
```

e acesse `http://localhost:8000`.
