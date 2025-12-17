import React from 'react';

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(overrride){
       return this.props.children({addEmoji: this.addEmoji});
    }
}
