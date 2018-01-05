import './lib/firebaseInitializer';
import Sample from './lib/Sample';
import $ from 'jquery';

const sample = new Sample({
    name: 'world'
});

$('.wrapper').on('click', () => {
    console.log(`hello, ${sample.name}.`);
});


document.querySelector('.js-google-login').addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('認証成功')
        console.log(user.uid);
    }
});

firebase.auth().getRedirectResult().catch((err) => {
    console.log('認証失敗');
    console.error(err);
});
