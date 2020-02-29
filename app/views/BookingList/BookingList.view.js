import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import { findIndex } from 'lodash';
import PropTypes from 'prop-types';
import styles from './BookingList.styles';
import { Button, Container, Header } from '../../components/base';

export default class BookingList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      classList: [
        {
          name: 'React Native',
          time: '11:00 AM',
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        },
        {
          name: 'Angular',
          time: '13:00 PM',
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        },
        {
          name: 'Node JS',
          time: '15:00 PM',
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        },
        {
          name: 'Kotlin',
          time: '9:00 AM',
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        },
      ],
    };
    this._onPressJoin = this._onPressJoin.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  _onPressJoin(item) {
    const { navigation } = this.props;
    const routeList = navigation.dangerouslyGetState().routes;
    const index = findIndex(routeList, (item) => item.name === 'BookingScreen');
    const { email } = routeList[index].params;
    navigation.navigate('CheckOutScreen', { email, item });
  }

  _keyExtractor(item, index) {
    return `list_class_${index}`;
  }

  renderItem({ item, index }) {
    const { name, time, desc } = item;
    return (
      <View style={styles.classContainer} key={index}>
        <Text style={styles.className}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
        <Text
          numberOfLines={4}
          ellipsizeMode="tail"
          style={styles.desc}
        >
          {desc}
        </Text>
        <View>
          <Button
            text="Join"
            onPress={() => { this._onPressJoin(item); }}
          />
        </View>
      </View>
    );
  }


  render() {
    const { classList } = this.state;
    const headerProps = {
      centerComponent: { text: 'Class App' },
    };
    return (
      <Container>
        <Header {...headerProps} />
        <FlatList
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          data={classList}
        />
      </Container>
    );
  }
}

BookingList.propTypes = {
  navigation: PropTypes.object.isRequired,
};
