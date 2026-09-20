# Metaindustria Mobile Sprint 3

Aplicativo mobile desenvolvido com React Native, Expo e TypeScript para listar, consultar e cadastrar equipamentos industriais usando a API Spring Boot da Metaindustria.

Na Sprint 3, o mock deixou de ser a fonte dos dados. O fluxo de lista, cadastro e detalhe agora usa registros reais do backend.

## Entidade utilizada

O app usa a entidade `Equipamento`, alinhada ao JSON retornado pela API.

```ts
export type Equipamento = {
  id: number;
  nome: string;
  setor: string;
  status: "ATIVO" | "MANUTENCAO" | "INATIVO";
  temperaturaAtual: number;
  dataUltimaManutencao: string;
};
```

## Estrutura de pastas

```text
src/
  components/
    EquipamentoCard.tsx
  screens/
    CadastroEquipamentoScreen.tsx
    DetalheEquipamentoScreen.tsx
    ListaEquipamentosScreen.tsx
  services/
    api.ts
    equipamentoService.ts
  types/
    Equipamento.ts
App.tsx
README.md
entrega.txt
```

## Camada de services

As telas nao chamam Axios diretamente e nao montam URL. Todas as chamadas passam pelos services:

- `src/services/api.ts`: configura `baseURL`, `timeout` e header `Content-Type: application/json`.
- `src/services/equipamentoService.ts`: expoe `listar`, `buscarPorId` e `criar`.

O Axios foi instalado com:

```bash
npx expo install axios
```

## BASE_URL

O app usa estas URLs como referencia:

- Web ou iOS simulator: `http://localhost:8080`
- Emulador Android: `http://10.0.2.2:8080`
- Celular fisico: IP da maquina na rede, por exemplo `http://192.168.0.10:8080`

Por padrao, `api.ts` usa `10.0.2.2` no Android e `localhost` nas demais plataformas. Para testar em celular fisico, crie um arquivo `.env.local` com:

```env
EXPO_PUBLIC_API_URL=http://SEU_IP_DA_MAQUINA:8080
```

Depois reinicie o Expo.

## Endpoints esperados

Confirme os endpoints no navegador, Postman ou Insomnia antes de abrir o app:

```http
GET http://localhost:8080/equipamentos
GET http://localhost:8080/equipamentos/{id}
POST http://localhost:8080/equipamentos
```

Exemplo de body para `POST /equipamentos`:

```json
{
  "nome": "Furadeira CNC 04",
  "setor": "Linha de Producao B",
  "status": "ATIVO",
  "temperaturaAtual": 65.2,
  "dataUltimaManutencao": "2026-05-20"
}
```

No backend Spring Boot, os controllers devem liberar CORS com `@CrossOrigin`.

## Como subir o backend

Na pasta do backend Spring Boot da Sprint 1, suba a API na porta `8080`.

Com Maven Wrapper:

```bash
./mvnw spring-boot:run
```

Ou com Maven instalado:

```bash
mvn spring-boot:run
```

Antes de integrar, teste `http://localhost:8080/equipamentos` e confirme que a resposta esta em JSON.

## Como subir o frontend

Na pasta deste projeto:

```bash
npm install
npx expo start
```

Tambem e possivel usar:

```bash
npm start
```

## Fluxo integrado do app

- A tela de lista chama `GET /equipamentos` com `useEffect`.
- A tela de cadastro chama `POST /equipamentos`.
- A tela de detalhe chama `GET /equipamentos/{id}`.
- As chamadas usam `try/catch/finally`.
- O app exibe estados de carregamento, erro e sucesso.
- Se o backend estiver parado, lista, detalhe e cadastro mostram mensagem de erro e a lista/detalhe permitem tentar novamente.

## Integrantes do grupo

- Pedro Alvarez Certo - RM 554603 - pedro.a.certo@gmail.com
- Caio Tadeu Da Silva Faraleski - RM 558795 - faraleskicaio@gmail.com
- Gustavo Demeis Peres - RM 555143 - gustavo.demeis@gmail.com
- Rodrigo Caruzzo Benevides - RM 554665 - digocbenevides@gmail.com
- Eduardo do Nascimento Souza - RM 558819 - contato.eduardons@gmail.com
