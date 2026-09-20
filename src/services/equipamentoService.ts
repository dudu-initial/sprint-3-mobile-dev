import { api } from "./api";
import type { Equipamento } from "../types/Equipamento";

export type CriarEquipamentoDTO = Omit<Equipamento, "id">;

const recurso = "/equipamentos";

export async function listar(): Promise<Equipamento[]> {
  const resposta = await api.get<Equipamento[]>(recurso);
  return resposta.data;
}

export async function buscarPorId(id: number): Promise<Equipamento> {
  const resposta = await api.get<Equipamento>(`${recurso}/${id}`);
  return resposta.data;
}

export async function criar(dados: CriarEquipamentoDTO): Promise<Equipamento> {
  const resposta = await api.post<Equipamento>(recurso, dados);
  return resposta.data;
}
