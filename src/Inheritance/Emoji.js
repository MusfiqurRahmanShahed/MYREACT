import React from 'react';

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(overrride){
        let text = 'I am a software engineer';

        if(overrride){
            text = overrride;
        }
        return(
            <div>
                {text}
            </div>
        )
    }
}
