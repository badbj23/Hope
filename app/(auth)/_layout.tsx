import { Stack } from "expo-router";
import '@/global.css';
import {ReactNode} from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return <Stack screenOptions={{ headerShown: false }}>{children}</Stack>;
}

