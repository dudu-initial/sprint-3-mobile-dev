import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { CadastroEquipamentoScreen } from "./src/screens/CadastroEquipamentoScreen";
import { DetalheEquipamentoScreen } from "./src/screens/DetalheEquipamentoScreen";
import { ListaEquipamentosScreen } from "./src/screens/ListaEquipamentosScreen";

type Tela = "lista" | "cadastro" | "detalhe";

export default function App() {
  const [telaAtual, setTelaAtual] = useState<Tela>("lista");
  const [equipamentoSelecionadoId, setEquipamentoSelecionadoId] =
    useState<number | null>(null);
  const [atualizacaoLista, setAtualizacaoLista] = useState(0);

  const abrirLista = () => {
    setTelaAtual("lista");
    setEquipamentoSelecionadoId(null);
  };

  const abrirCadastro = () => {
    setTelaAtual("cadastro");
  };

  const abrirDetalhe = (equipamentoId: number) => {
    setEquipamentoSelecionadoId(equipamentoId);
    setTelaAtual("detalhe");
  };

  const concluirCadastro = () => {
    setAtualizacaoLista((valorAtual) => valorAtual + 1);
    abrirLista();
  };

  const renderizarTela = () => {
    if (telaAtual === "cadastro") {
      return (
        <CadastroEquipamentoScreen
          onCancelar={abrirLista}
          onSalvo={concluirCadastro}
        />
      );
    }

    if (telaAtual === "detalhe" && equipamentoSelecionadoId) {
      return (
        <DetalheEquipamentoScreen
          equipamentoId={equipamentoSelecionadoId}
          onVoltar={abrirLista}
        />
      );
    }

    return (
      <ListaEquipamentosScreen
        atualizacao={atualizacaoLista}
        onAbrirCadastro={abrirCadastro}
        onSelecionarEquipamento={abrirDetalhe}
      />
    );
  };

  return <View style={styles.container}>{renderizarTela()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101828",
  },
});
