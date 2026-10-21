import { Platform, ScrollView, StyleSheet, View, Text } from "react-native";
import { colors, fonts } from "../../theme";
import { useLocalSearchParams } from "expo-router";
import { quests } from "../../mocks/quests";
import { SafeAreaView } from "react-native-safe-area-context";
import { Description } from "../../components/Description";
import { difficultyColors, rewardColors } from "../../types/domain";
//import { ButtonMission } from "../../components/ButtonMission";

// colocar botão mais tarde
//chegar ScrollView mais tarde, ver deve manter a tela fixa ou pode continuar assim
export default function MissaoRoute() {
    const { id } = useLocalSearchParams();
    const quest = quests.find((item) => item.id === id);

    if (!quest) {
        return (
        <View style={styles.background}>
            <SafeAreaView style={styles.screen}>
            <Text style={{ color: colors.text }}>Missão não encontrada.</Text>
            </SafeAreaView>
        </View>
        );
    }

    const color = difficultyColors[quest.difficulty];

    
    return (
        <View style={styles.background}>
            <SafeAreaView style={styles.screen}>
                <ScrollView>

                    <View style={styles.container}>
                        <View style={styles.header_box}>
                            <Text style={styles.header_return_text}>Voltar</Text>
                            <Text style={styles.header_detail_text}>Detalhes</Text>
                            <Text style={styles.header_algo}>abobra</Text>

                        </View>
                            <Text style={{ height: 100, backgroundColor: colors.yellow}}>Aqui fica uma imagem</Text>
                        <View/>
                        
                    </View>

                    <View style={styles.container}>
                        <View style={styles.title_box}>
                            <Text style={styles.mission_title}>{quest.title}</Text>
                            <View style={[styles.difficultyBadge, {borderColor: color.main}]}>
                                <Text style={[styles.difficulty, {color: color.main }]}>{quest.difficulty}</Text>
                            </View>
                        </View>
                    </View>

                    <Description description={quest.description} />
                    
                    <View style={styles.container}>
                        <Text style={styles.detail_text}>SPOIL DE BATALHA(RECOMPENSAS)</Text>

                        <View style={styles.reward_box}>
                            <View style={styles.reward}>
                                <Text style={styles.reward_description}>XP</Text>
                                <Text style={[styles.reward_text, { color: rewardColors.xp.main }]}>+{quest.reward.xp} XP</Text>
                            </View>
                            
                            <View style={styles.reward}>
                                <Text style={styles.reward_description}>OURO</Text>
                                <Text style={[styles.reward_text, { color: rewardColors.coins.main }]}>+{quest.reward.coins} moedas</Text>
                            </View>

                            <View style={styles.reward}>
                                <Text style={styles.reward_description}>ITENS</Text>
                                <Text style={[styles.reward_text, { color: rewardColors.item.main }]}>Null</Text>
                            </View>
                        </View>
                    </View>
                    
                    {/*<ButtonMission></ButtonMission>*/}

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.background,
    },
    screen: {
        flex: 1,
        width: "100%",
        maxWidth: Platform.OS === "web" ? 390 : 600,
        backgroundColor: colors.background,
    },
    container: {
        paddingHorizontal: 24,
        paddingVertical: 5,
        gap: 6,

    },

    header_box: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    header_return_text: {
        fontFamily: fonts.semibold,
        fontSize: 18,
        color: colors.purple,
    },
    header_detail_text: {
        fontFamily: fonts.semibold,
        fontSize: 12,
        color: colors.muted,
    },
    header_algo:{
        fontFamily: fonts.semibold,
        fontSize: 12,
        color: colors.muted,
    },

    title_box: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    mission_title :{
        fontFamily: fonts.bold,
        fontSize: 24,
        color: colors.text,
    },
    difficultyBadge: {
        margin: 5,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: colors.border,
    },
    difficulty: {
        fontFamily: fonts.bold,
        fontSize: 14,
        lineHeight: 13,
    },

    detail_text:{
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.muted,
    },

    reward_box: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    reward: {
        width: 100,
        alignItems: "center",
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: colors.border,
        gap: 1,
        fontFamily: fonts.bold,

    },
    reward_description:{
        fontFamily: fonts.bold,
        fontSize: 10,
        color: colors.muted,
    },
    reward_text: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.muted,
    }
})
