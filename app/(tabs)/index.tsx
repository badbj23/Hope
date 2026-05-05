import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';
import {styled} from "nativewind";


const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 items-center p-5 bg-background">
            <Text className="text-4xl font-bold text-success">
                Home
            </Text>
            <Link href="/onboard" className="mt-4 rounded bg-primary text-white p-4">
                Onbaord
            </Link>

            <Link href="/(auth)/signIn" className="mt-4 rounded bg-primary text-white p-4">
                SignIn
            </Link>

            <Link href="/(auth)/signUp" className="mt-4 rounded bg-primary text-white p-4">
                SignUp
            </Link>

        </SafeAreaView>
    );
}
