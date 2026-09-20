export type Equipamento = {
  id: number;
  nome: string;
  setor: string;
  status: "ATIVO" | "MANUTENCAO" | "INATIVO";
  temperaturaAtual: number;
  dataUltimaManutencao: string;
};
