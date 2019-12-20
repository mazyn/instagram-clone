import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Post } from '../presentation';

class PostFeed extends Component {

    _renderPost({ item }) {
        return < Post item={item} />;
    }

    _returnKey(item) {
        return item.toString();
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                keyExtractor={this._returnKey}
                renderItem={(item) => this._renderPost(item)}
            />
        );
    }
}

export default PostFeed;