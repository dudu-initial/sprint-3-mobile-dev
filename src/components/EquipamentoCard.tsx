import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import type { Equipamento } from "../types/Equipamento";

type EquipamentoCardProps = {
  equipamento: Equipamento;
  onPress: () => void;
};

const statusStyles = {
  ATIVO: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },
  MANUTENCAO: {
    backgroundColor: "#FEF3C7",
    color: "#92400E",
  },
  INATIVO: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
  },
} as const;

export function EquipamentoCard({
  equipamento,
  onPress,
}: EquipamentoCardProps) {
  const badgeStyle = statusStyles[equipamento.status];

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.header}>
        <Text style={styles.nome}>{equipamento.nome}</Text>
        <View style={[styles.badge, { backgroundColor: badgeStyle.backgroundColor }]}>
          <Text style={[styles.badgeText, { color: badgeStyle.color }]}>
            {equipamento.status}
          </Text>
        </View>
      </View>

      <View style={styles.infoGroup}>
        <Text style={styles.label}>Setor</Text>
        <Text style={styles.value}>{equipamento.setor}</Text>
      </View>

      <View style={styles.infoGroup}>
        <Text style={styles.label}>Temperatura atual</Text>
        <Text style={styles.value}>{equipamento.temperaturaAtual.toFixed(1)} °C</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F8FAFC",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
  header: {
    marginBottom: 14,
  },
  nome: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
  infoGroup: {
    marginBottom: 10,
  },
  label: {
    color: "#475467",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  value: {
    color: "#1E293B",
    fontSize: 15,
  },
});
