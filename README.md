# viz.dados.rio

Repositório para apoiar o desenvolvimento de visualizações de dados para o Escritório de Dados Rio.

## Como criar componentes exportáveis:

- No arquivo `src/components/base.js` você encontrará as instruções para gerar o componente e registrá-lo para um bundle próprio.
- Quando o deployment desse componente estiver completo, seu bundle estará disponível em [https://viz.dados.rio/bundle\_<nome_do_componente>.js](#)

## Como integrar no Webflow:

- Criar um componente no Webflow com o ID selecionado por você no componente (vide comentários em `src/components/base.js`).
- Dentro do `<head>`, inclua o seguinte código (confirmar versões do React):

```html
<script src="https://unpkg.com/react@16.4.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.production.min.js"></script>
```

- Se o componente depende do Mapbox, antes do `</body>`, inclua o seguinte código:

```html
<script src="https://viz.dados.rio/bundle_mapbox-gl-csp-worker.worker.js"></script>
```

- Logo antes do `</body>`, inclua o seguinte código (trocar pelo componente que deseja incluir):

```html
<script src="https://viz.dados.rio/bundle_<nome_do_componente>.js"></script>
```

## Q&A

- As coisas não aparecem no Webflow!

  - Verifique o ID do componente no Webflow e verifique se o componente está sendo importado corretamente.
