import { Text, View } from 'react-native';

type IntroPageProps = {
  title: string;
  subtitle: string;
};

export default function IntroPage({ title, subtitle }: IntroPageProps) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text>{title}</Text>
                <Text>{subtitle}</Text>
            </View>
            <View style={{
                    padding: 20, // Add padding so it's not glued to the screen edges
                    alignItems: "flex-end",
                }}>
                <Text>Cliquer pour continuer ...</Text>
            </View>
        </View>
    );
}