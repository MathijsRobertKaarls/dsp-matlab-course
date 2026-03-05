# DSP with MATLAB — Interactive HTML Course

An open-source, self-contained interactive course on **Digital Signal Processing using MATLAB**, designed for beginners to intermediate learners. No server required beyond a simple Python HTTP server included in the repo.

![DSP Course](https://img.shields.io/badge/topics-25-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![MATLAB](https://img.shields.io/badge/MATLAB-R2021a%2B-orange)

---

## 🚀 Quick Start

```bash
git clone https://github.com/MathijsRobertKaarls/dsp-matlab-course.git
cd dsp-matlab-course
python3 serve.py
```

Then open **http://localhost:8080** in your browser.

> **Note:** Opening `index.html` directly via `file://` will not work — browsers block local file fetching for security reasons. Use the included server.

---

## 📘 What's Inside

25 fully written topic pages across 6 modules, each following a consistent template:

1. Plain-English introduction (ELI5 first)
2. Core concept with analogies
3. Mathematical foundation (rendered via KaTeX)
4. SVG diagrams and visual aids
5. Inline quizzes with instant feedback
6. Copy-pasteable MATLAB code (highlighted via highlight.js)
7. Collapsible hints and expected outputs
8. Key takeaways summary

### Module Overview

| Module | Topics | Coverage |
|--------|--------|----------|
| **1 — Foundations** | 1.1–1.4 | What is DSP, Sampling & Nyquist, Periodic Signals, LTI Systems |
| **2 — Frequency Domain** | 2.1–2.4 | Fourier Transform, Aliasing, DFT vs FFT, DAC Zero-Order Hold |
| **3 — Signal Quality** | 3.1–3.4 | SNR & Averaging, Zero-Padding, Windowing, Interpolation |
| **4 — Time-Frequency** | 4.1–4.2 | STFT & Spectrogram, Wavelets (CWT & DWT) |
| **5 — Filter Design** | 5.1–5.6 | FIR/IIR Design, Z-Transform, Difference Equations, Block Diagrams, Bode Plots, Pole-Zero |
| **6 — Resampling** | 6.1–6.5 | Rational Resampling, Upsampling, Downsampling, Zero Stuffing, Zero Padding |

---

## 🖥️ Features

- **Dark / Light mode** toggle (persists across sessions)
- **Progress tracking** via `localStorage` — marks completed topics with ✓
- **Inline MCQ quizzes** with immediate green/red feedback and explanations
- **Syntax-highlighted MATLAB code** blocks with one-click copy
- **KaTeX** math rendering for all formulas
- **Collapsible hint boxes** for exercises
- **Previous / Next navigation** + sidebar module tree
- **Animated signal wave** hero on the welcome screen
- Fully **responsive** layout

---

## 📁 Project Structure

```
dsp-matlab-course/
├── index.html              # Main app shell (nav, routing, theme, progress)
├── serve.py                # One-command local HTTP server
├── css/
│   └── style.css           # Full dark/light theme, all component styles
├── js/
│   ├── quiz.js             # MCQ engine with instant feedback
│   └── progress.js         # localStorage progress tracking
└── modules/
    ├── m1-foundations/     # 4 topics
    ├── m2-frequency/       # 4 topics
    ├── m3-quality/         # 4 topics
    ├── m4-time-frequency/  # 2 topics
    ├── m5-filters/         # 6 topics
    └── m6-resampling/      # 5 topics
```

---

## 🛠️ Tech Stack

| Purpose | Tool |
|---------|------|
| Math rendering | [KaTeX](https://katex.org/) (CDN) |
| Code highlighting | [highlight.js](https://highlightjs.org/) with MATLAB grammar (CDN) |
| Backend | None — pure HTML/CSS/JS |
| Server | Python 3 `http.server` (included) |

No npm, no build step, no dependencies to install.

---

## 🎯 Target Audience

| Level | Description |
|-------|-------------|
| **Noob** | No prior DSP or MATLAB experience; comfortable with basic math |
| **Beginner** | Some programming background, new to signal processing |
| **Intermediate** | Comfortable with MATLAB, wants deeper DSP understanding |

---

## 💻 MATLAB Compatibility

All code is compatible with **MATLAB R2021a or newer**. Toolbox requirements are noted per topic:
- **Signal Processing Toolbox** — required for `spectrogram()`, `fir1()`, `butter()`, `freqz()`, etc.
- **Wavelet Toolbox** — required for `cwt()`, `wavedec()` (Topic 4.2 only)
- **Base MATLAB** — sufficient for Modules 1, 2, and most of 6

Octave-compatible alternatives are noted where applicable.

---

## 🤝 Contributing

Contributions welcome! Ideas:
- Additional topic pages (e.g. adaptive filters, multirate filterbanks)
- Octave-specific code alternatives
- Interactive canvas animations (chirp, pole-zero drag)
- Translations

Open an issue or submit a pull request.

---

## 📄 License

[MIT License](LICENSE) — free to use, modify, and distribute.

