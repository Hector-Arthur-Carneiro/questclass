    import { StyleSheet, Text, View } from "react-native";
    import { colors, fonts } from "../theme";

    type DescriptionProps = {
    description: string;
    dueDate?: string;
    };

    export function Description({ description, dueDate }: DescriptionProps) {
    return (
        <View style={styles.container}>
        <View style={styles.description_box}>
            <View style={styles.instruction}>
            <Text style={styles.title_text}>Instruções do pergaminho</Text>
            <Text style={styles.text_description}>{description}</Text>
            </View>
            {dueDate && <Text style={styles.time}>Prazo final: {dueDate}</Text>}
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 5,
    },
    description_box: {
        backgroundColor: colors.yellow,
        padding: 14,
        gap: 6,
        borderRadius: 6,
    },
    instruction: {
        gap: 4,
        borderBottomWidth: 1,
        borderColor: colors.light_brown,
    },
    title_text: {
        textAlign: "center",
        fontFamily: fonts.bold,
        color: colors.light_brown,
    },
    text_description: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: colors.brown,
        paddingBottom: 8,
    },
    time: {
        fontSize: 14,
        fontFamily: fonts.semibold,
        color: colors.brown,
    },
});