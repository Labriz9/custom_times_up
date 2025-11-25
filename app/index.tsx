import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [player_number, setPlayerNumber] = useState(4);
  const incPlayerNumber = () => {setPlayerNumber(Math.min(player_number+1,20))};
  const decPlayerNumber = () => {setPlayerNumber(Math.max(player_number-1,4))};
  const [team_number, setTeamNumber] = useState(2);
  const incTeamNumber = () => {setTeamNumber(Math.min(team_number+1,10))};
  const decTeamNumber = () => {setTeamNumber(Math.max(team_number-1,2))};
  const [turn_duration, setTurnDuration] = useState(60);
  const incTurnDuration = () => {setTurnDuration(Math.min(turn_duration+30,180))};
  const decTurnDuration = () => {setTurnDuration(Math.max(turn_duration-30,30))};
  
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text>Times Up Custom</Text>
        </View>
        <View style={{flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Button
            title="Démarrer la partie" 
            onPress={() => {
              console.log("Navigating...");
              router.push('/round/start');
            }} 
          />
        </View>
      </View>
      
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
        <View style={{flexDirection:"row"}}>
          <Text>Nombre de joueur: </Text><Text onPress={decPlayerNumber}>-</Text><Text> {player_number} </Text><Text  onPress={incPlayerNumber}>+</Text>
          </View>
        <View style={{flexDirection:"row"}}>
          <Text>Nombre d'équipes: </Text><Text onPress={decTeamNumber}>-</Text><Text> {team_number} </Text><Text  onPress={incTeamNumber}>+</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text>Durée d'un tour: </Text><Text onPress={decTurnDuration}>-</Text><Text> {turn_duration}s </Text><Text  onPress={incTurnDuration}>+</Text>
        </View>
      </View>
    </View>
  );
}
