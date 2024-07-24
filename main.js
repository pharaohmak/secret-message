document.getElementById('manipulateMessage').addEventListener('click', () => {
    let secretMessage = document.getElementById('message').value.split(' ');

    document.getElementById('originalMessage').innerText = `Original Message: ${secretMessage.join(' ')}`;

    console.log(secretMessage.length);
    secretMessage.pop(); // remove last element
    console.log(secretMessage.length);

    secretMessage.push('to', 'Program'); // add elements to end of array
    console.log(secretMessage.length);

    console.log(secretMessage.indexOf('easily')); // get index of element
    secretMessage[7] = 'right'; // change element accessing index
    console.log(secretMessage.length);
    console.log(secretMessage[7]);

    secretMessage.shift(); // remove first element

    secretMessage.splice(6, 10, 'know'); // remove elements and replace
    console.log(secretMessage.length);

    const finalMessage = secretMessage.join(' ');
    console.log(finalMessage);

    document.getElementById('finalMessage').innerText = `Final Message: ${finalMessage}`;
});