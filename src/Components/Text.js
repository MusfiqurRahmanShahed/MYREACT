
export default function Text({ addEmoji, addBracket }) {
    let text = 'I am a software engineer';


    if (addEmoji) {
        text = addEmoji(text, '😀');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>
    {/* {addEmoji ? addEmoji(text, '😀') : text} */ }

}