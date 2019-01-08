import React, {PureComponent} from 'react';
import {FlatList, StyleSheet,
    Text, View,
    TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {GetUser} from "../actions/userAction";
class user extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            userList: []
        }
    }

    componentDidMount() {
        this.props.GetUser();
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log("componentWillReceiveProps");
        console.log(nextProps);
    }

    renderSeparator = ()=>{
        return <View style={{height:10}}/>;
    };

    renderEmpty = () => {
        return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:15}}>
                {"No data found"}
            </Text>
        </View>
    };

    renderItem = ({item, index}) => {
        const {rowContainer} = styles;
        debugger
        return(
            <TouchableOpacity onPress={()=>this.onRowClick(item)} >
                <View key={index} style={rowContainer}>
                    <Text>
                        {item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    render() {

        const {userList} = this.props;
        debugger;
        console.log("User List=>"+this.props);


        return (
            <View style={styles.container}>
                <FlatList data={userList}
                          contentContainerStyle={{top:20}}
                          automaticallyAdjustContentInsets={false}
                          renderItem={this.renderItem}
                          ItemSeparatorComponent={this.renderSeparator}
                          ListEmptyComponent={this.renderEmpty}
                          ListFooterComponent={<View style={{ height: 50}}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        justifyContent:'center',
    },
    titleText: {
        fontSize: 12,
        alignSelf: 'center',
        marginBottom: 20
    },
    rowContainer: {
        borderRadius:5,
        padding:10,
        borderWidth:1,
        backgroundColor:'lightblue',
        borderColor:'black',
        marginLeft:10,
        marginRight:10
    }
});

const mapStateToProps = (state) => {
    const {userList} =state.user;
    debugger
    return {
        userList
    };
};
export default connect(mapStateToProps,{
    GetUser
})(user);