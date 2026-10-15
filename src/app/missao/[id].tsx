import { View, Text } from "react-native";
import { colors } from "../../theme";
import { useLocalSearchParams } from "expo-router";
import { quests } from "../../mocks/quests";

export default function MissaoRoute() {
    const { id, origem } = useLocalSearchParams();
    const quest = quests.find((item) => item.id === id)
    return (
        <View>
            <Text style={{ color: colors.text }}>Detalhes da Missão</Text>
            <Text style={{ color: colors.text }}>ID da Missão: {id}</Text>
            <Text style={{ color: colors.text }}>Origem: {origem}</Text>
            <Text style={{ color: colors.text }}>Título da Missão: {quest?.title}</Text>
            <Text style={{ color: colors.text }}>Descrição da Missão: {quest?.description}</Text>
        </View>
    );
}