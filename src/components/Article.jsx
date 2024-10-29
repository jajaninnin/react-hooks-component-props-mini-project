import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    let minutesWithEmoji = '';
    if (minutes < 30) {
        const numberOfCoffee = Math.ceil(minutes / 5);
        const coffees = "☕️".repeat(numberOfCoffee);
        minutesWithEmoji = `${coffees} ${minutes} min read`;
    } else {
        const numberOfBento = Math.ceil(minutes / 10);
        const bentos = "🍱".repeat(numberOfBento);
        minutesWithEmoji = `${bentos} ${minutes} min read`;
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <span>{minutesWithEmoji}</span>
        </article>
    )
}

export default Article