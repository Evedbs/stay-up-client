import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <>
            <View
                style={{
                    flex: 0.5,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Edit app/index.tsx to edit this screen.</Text>
                <Link href={"/onboarding"}>A propos</Link>
            </View>
            <View style={{
                flex: 0.5,
                backgroundColor: "blue",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{ color: "white" }}>THE AWOSEOME SCREEN</Text>
            </View>
        </>
    );
}
