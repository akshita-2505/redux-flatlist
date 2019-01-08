import {createStackNavigator,createAppContainer} from 'react-navigation';
import User from '../components/user';

const appNavigation=createStackNavigator({
        user:User,
    },
    {
        initialRouteName:'user'
    },
);

export default createAppContainer(appNavigation)