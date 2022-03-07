import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    container: {
        padding: 30
    },
    taksItem: {
        borderColor: 'black',
        borderStyle: 'dashed',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})