# Luz Oliveira Interiores

Landing page institucional em Astro para apresentar projetos e consultoria de interiores em Maceió, AL.

Publicação oficial: https://luz-oliveira-interiores.pages.dev

## Desenvolvimento local

```bash
npm install
npm run dev
npm test
npm run build
```

O projeto é publicado como site estático no Cloudflare Pages. A configuração de deploy está em `wrangler.jsonc`.

## Conteúdo e manutenção

- Os projetos apontam para publicações públicas do perfil oficial.
- Informações biográficas, depoimentos e detalhes comerciais não confirmados não devem ser inventados.
- Alterações de conteúdo devem preservar a identidade visual e as informações validadas pela profissional.

## Domínio próprio e indexação

1. Copie `.env.example` para `.env`.
2. Defina `PUBLIC_SITE_URL` com o endereço definitivo, incluindo `https://`.
3. Mantenha `PUBLIC_ALLOW_INDEXING=false` durante ajustes finais ou homologação do domínio.
4. Ao liberar o domínio definitivo para indexação pública, altere para `PUBLIC_ALLOW_INDEXING=true` e publique uma nova versão.
5. Conecte o domínio na hospedagem somente depois de confirmar quem será o titular responsável pela renovação anual.

O título, a descrição, o endereço canônico, o compartilhamento social, os dados estruturados, o `robots.txt` e o sitemap usam essas configurações.
