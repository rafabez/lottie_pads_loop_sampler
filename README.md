# Lottie Pads Loop Sampler

**Interactive sound pad grid with Lottie animations and audio loop playback.**  
Live Demo: [Lottie Pads Loop Sampler](https://rafabeznos.com.br/fx/sound/sampler/index.html)

---

## About

Lottie Pads Loop Sampler is a dynamic audio sampler that combines sound playback with real-time visual effects using Lottie animations. Built with Tone.js and Lottie-web, this project is designed to let users tap into creativity by creating unique beat loops paired with animated visuals.

---

## Features

- **16 Interactive Pads**: Each pad plays a unique sound loop.
- **Lottie Animations**: Visual feedback through customizable animations.
- **Responsive Design**: Works seamlessly across desktop and mobile devices.

---

## Getting Started

### Prerequisites
- A modern browser supporting ES6 and JavaScript modules.
- [Node.js](https://nodejs.org/) (optional, if hosting locally).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rafabez/lottie_pads_loop_sampler.git
   cd lottie_pads_loop_sampler
   ```
2. Open `index.html` in a web browser to launch the app.

---

## Customization

### 1. Change the Sound Files
Each pad is linked to a unique sound file. To customize:
1. Replace the existing sound files (`break1.mp3`, `break2.mp3`, etc.) in the project directory with your own.
2. Update the `data-sound` attributes in `index.html`:
   ```html
   <div class="pad" data-sound="your_custom_sound.mp3"><div class="lottie-animation"></div></div>
   ```
   Ensure your new sound files are in the correct path relative to the project.

### 2. Change Lottie Animations
Each pad features a Lottie animation defined in the `button.json` file. To customize:
1. Replace the `button.json` file with your custom Lottie animation file.
2. Update the `path` property in `script.js`:
   ```javascript
   const anim = lottie.loadAnimation({
       container: lottieContainer,
       renderer: 'svg',
       loop: false,
       autoplay: false,
       path: 'your_custom_animation.json' // Path to your Lottie file
   });
   ```

---

## Instructions

### How to Use
1. Open the [live demo](https://rafabeznos.com.br/fx/sound/sampler/index.html).
2. Click any pad to start or stop its sound loop.
3. Observe the visual feedback through Lottie animations as you interact with the pads.

---

## Technologies Used

- **Tone.js**: For seamless audio playback and looping.
- **Lottie-web**: For rendering high-performance animations.
- **HTML/CSS/JavaScript**: For the core structure and logic.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

---

## Author

[**rafabez**](https://github.com/rafabez)  
Visit my website: [rafabeznos.com.br](https://rafabeznos.com.br)
