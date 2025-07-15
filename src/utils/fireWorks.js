import confetti from 'canvas-confetti';

export function neutral() {
	return new Promise(resolve => {
		const count = 200,
			defaults = {
				origin: { y: 0.7 },
			};

		function fire(particleRatio, opts) {
			confetti(
				Object.assign({}, defaults, opts, {
					particleCount: Math.floor(count * particleRatio),
				})
			);
		}

		fire(0.25, {
			spread: 26,
			startVelocity: 55,
		});

		fire(0.2, {
			spread: 60,
		});

		fire(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		});

		fire(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		});

		fire(0.1, {
			spread: 120,
			startVelocity: 45,
		});

		// Animation is instant, so resolve immediately
		setTimeout(resolve, 500);
	});
}

export function happy() {
	return new Promise(resolve => {
		const end = Date.now() + 5 * 1000;
		const colors = ['#bb0000', '#ffffff'];

		(function frame() {
			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				origin: { x: 0 },
				colors: colors,
			});

			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				origin: { x: 1 },
				colors: colors,
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			} else {
				resolve();
			}
		})();
	});
}

export function disgusted() {
	return new Promise(resolve => {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
		});
		setTimeout(resolve, 1000);
	});
}

export function surprised() {
	return new Promise(resolve => {
		const duration = 10 * 1000,
			animationEnd = Date.now() + duration,
			defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		const interval = setInterval(function () {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				clearInterval(interval);
				resolve();
				return;
			}

			const particleCount = 50 * (timeLeft / duration);

			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
				})
			);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
				})
			);
		}, 250);
	});
}

export function fearful() {
	return new Promise(resolve => {
		const duration = 10 * 1000,
			animationEnd = Date.now() + duration;

		let skew = 1;

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		(function frame() {
			const timeLeft = animationEnd - Date.now(),
				ticks = Math.max(200, 500 * (timeLeft / duration));

			skew = Math.max(0.8, skew - 0.001);

			confetti({
				particleCount: 1,
				startVelocity: 0,
				ticks: ticks,
				origin: {
					x: Math.random(),
					y: Math.random() * skew - 0.2,
				},
				colors: ['#ffffff'],
				shapes: ['circle'],
				gravity: randomInRange(0.4, 0.6),
				scalar: randomInRange(0.4, 1),
				drift: randomInRange(-0.4, 0.4),
			});

			if (timeLeft > 0) {
				requestAnimationFrame(frame);
			} else {
				resolve();
			}
		})();
	});
}

export function sad() {
	return new Promise(resolve => {
		const duration = 5 * 1000;
		const intervalTime = 300;
		const end = Date.now() + duration;
		const emojis = ['😢', '😭', '😞', '😟', '😩', '😿', '☹️', '😥', '😰'];

		const interval = setInterval(() => {
			if (Date.now() > end) {
				clearInterval(interval);
				resolve();
				return;
			}

			for (let i = 0; i < 10; i++) {
				const emoji = document.createElement('div');
				emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
				emoji.className = 'emoji-drop';

				const size = 20 + Math.random() * 30;
				emoji.style.fontSize = `${size}px`;
				emoji.style.left = `${Math.random() * 100}vw`;
				emoji.style.animationDuration = `${3 + Math.random() * 2}s`;

				document.body.appendChild(emoji);

				setTimeout(() => emoji.remove(), 6000);
			}
		}, intervalTime);
	});
}

export function angry() {
	return new Promise(resolve => {
		const duration = 5 * 1000;
		const intervalTime = 300;
		const end = Date.now() + duration;
		const emojis = ['😠', '😡', '🤬', '😤', '🙄', '😾', '👿', '😖'];

		const interval = setInterval(() => {
			if (Date.now() > end) {
				clearInterval(interval);
				resolve();
				return;
			}

			for (let i = 0; i < 10; i++) {
				const emoji = document.createElement('div');
				emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
				emoji.className = 'emoji-drop';

				const size = 20 + Math.random() * 30;
				emoji.style.fontSize = `${size}px`;
				emoji.style.left = `${Math.random() * 100}vw`;
				emoji.style.animationDuration = `${3 + Math.random() * 2}s`;

				document.body.appendChild(emoji);

				setTimeout(() => emoji.remove(), 6000);
			}
		}, intervalTime);
	});
}
