import IntroPage from '@/component/IntroPage';
import { useGame } from '@/context/GameContext';
import { View } from 'react-native';

export default function Start() {
  const { round, current_player } = useGame();
  const title = `Manche ${round.id} : ${round.title}`
  const subtitle = `Joueur ${current_player.name}`

  
  return (
    <View style={{flex: 1}}>
      <IntroPage title={title} subtitle={subtitle}></IntroPage>
    </View>
  );
}
