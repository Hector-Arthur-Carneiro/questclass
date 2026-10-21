import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";
import { rewardColors } from "../types/domain"

type RewardBadgeProps = {
  amount: number;
  kind: "xp" | "coins";
};

export function RewardBadge({ amount, kind }: RewardBadgeProps) {
  const isXp = kind === "xp";
  const color = rewardColors[kind].main;

  return (
    <View style={styles.badge}>
      <Text
        style={[styles.text, { color }]}
      >
        +{amount} {isXp ? "XP" : "moedas"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: colors.background,
  },
  text: { fontFamily: fonts.bold, fontSize: 12, lineHeight: 15 },
});
