import FirstTimeQuestions from "@/components/ui/firstTime";
import StartButton from "@/components/ui/startButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [start, setStart] = useState<boolean>(false);
  const [firstTime, setFirstTime] = useState<boolean>(true);

  // ✅ Vérifie si c'est la première fois
  useEffect(() => {
    const checkFirstDay = async () => {
      try {
        const value = await AsyncStorage.getItem('@firstTime');
        if (value === null) {
          setFirstTime(true);
        } else {
          const value = await AsyncStorage.getItem("@firstTime");
          if(value == "true"){
            setFirstTime(true);
          }else{
            setFirstTime(false);
          }
        }
      } catch (e) {
        console.error(e);
      }
    };
    checkFirstDay();
  }, []);

  return (
    <View style={styles.container}>
      {start ? (
        <Text>Bienvenue</Text>
      ) : firstTime ? (
        <FirstTimeQuestions />
      ) : (
        <StartButton start={start} setStart={setStart} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
});
