document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.pad').forEach(pad => {
        const sound = pad.getAttribute('data-sound');
        const player = new Tone.Player({
            url: sound,
            loop: true,
            autoplay: false
        }).toDestination();

        const lottieContainer = pad.querySelector('.lottie-animation');
        const anim = lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'button.json'
        });

        let isMuted = true;

        pad.addEventListener('click', () => {
            Tone.start();
            isMuted = !isMuted;
            player.mute = isMuted;

            pad.classList.toggle('active', !isMuted);
            isMuted ? anim.stop() : anim.play();

            if (!player.state || player.state !== 'started') {
                player.start();
            }
        });

        anim.addEventListener('error', () => console.error(`Error loading animation for ${sound}`));
    });
});
