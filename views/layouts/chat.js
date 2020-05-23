//not needed already included this file using script tag
const talk = document.querySelector('.talk');
const voice2text = document.querySelector('.voice2text');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

recorder.onstart = () => {
    console.log('voice is activated ,you can talk');
};

recorder.onresult = (event) => {
    console.log(event);
};
talk.addEventListener('click', () => {
    recorder.start();
});