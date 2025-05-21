# 🎬 Movie Explorer SPA

Een interactieve single-page webapplicatie waarmee gebruikers populaire films kunnen ontdekken, zoeken, filteren en opslaan als favorieten. Gemaakt als eindproject voor het vak **Advanced Web**.

> 🔗 Gebruikt de officiële **The Movie Database (TMDb) API** voor realtime filmgegevens.

---

## 🚀 Live Preview

👉 **[Demo bekijken](https://your-live-demo-link.com)** *(optioneel)*
📂 **Repository:** `https://github.com/jarno-js/Web_Advanced_Project`

---

## 📌 Overzicht

Deze webapplicatie biedt:

* 🎞️ Een overzicht van populaire films via TMDb API
* 🔍 Zoek- en filtermogelijkheden op titel en jaartal
* 📈 Sorteren op populariteit
* ❤️ Mogelijkheid om favorieten lokaal op te slaan
* 🌙 Licht/donker thema met voorkeur-opslag
* 📱 Volledig responsive layout
* 🔝 Smooth scroll en "Terug naar boven"-functie

---

## 🛠️ Gebruikte technologieën

* **HTML**, **CSS (Flexbox/Grid)**, **JavaScript (ES6+)**
* **Vite** als build tool
* **TMDb API** voor filmdata
* **LocalStorage**, **IntersectionObserver**, **Modules**

---

## 📂 Structuur

```
📁 css/
│   └── index.css
📁 html/
│   └── index.html
📁 javascript/
│   └── index.js

```

---


## ⚙️ Functionaliteiten

| Functie                          | Bestand(en)    | Regel(s)            |
|----------------------------------|----------------|---------------------|
| API-authenticatie (Bearer token) | `index.js`     | regel 1             |
| 20+ films ophalen (2 pagina's)   | `index.js`     | 12–35               |
| Data tonen in lijstweergave      | `index.js`     | 48–85               |
| Filter op jaartal                | `index.js`     | 132–142             |
| Zoekfunctie op titel             | `index.js`     | 144–151             |
| Sorteren op populariteit         | `index.js`     | 153–160             |
| Favorieten toevoegen + opslaan   | `index.js`     | 90–130              |
| Thema wisselen (dark mode)       | `index.js`     | 201–213             |
| Scroll observer / "naar boven"   | `index.js`     | 166–179             |
| Responsive design (CSS)          | `index.css`    | volledig            |

---

## ✨ JavaScript-concepten toegepast

| Concept                           | Bestand       | Regel(s)            |
|----------------------------------|---------------|---------------------|
| `const`, `let` declaraties       | `index.js`    | over heel bestand   |
| DOM-selectie en manipulatie      | `index.js`    | 48–85, 144+         |
| Event listeners                  | `index.js`    | 132+, 201+          |
| Template literals                | `index.js`    | regel 17, 54, 107   |
| Arrow functions                  | `index.js`    | regel 87, 134, 175  |
| `map()`, `filter()`, `sort()`    | `index.js`    | 49, 132–160         |
| `async/await` + `fetch()`        | `index.js`    | 12–30               |
| `localStorage` gebruik           | `index.js`    | 91–105              |
| IntersectionObserver             | `index.js`    | 166–179             |
| Condities (`if`, ternary)        | `index.js`    | regel 34, 122, 138  |

---

## 🧪 Installatie & gebruik

### 🔧 Installatie (via CLI)

1. Clone de repository:

```bash
git clone https://github.com/jarno-js/Web_Advanced_Project.git
```

2. Ga naar de projectmap:

```bash
cd Web_Advanced_Project
```

3. Voeg jouw eigen **TMDb API Bearer Token** toe in `main.js` (regel 1)

4. Installeer de vereiste packages:

```bash
npm install
```

5. Start de development server:

```bash
npx vite
```

6. Open de gegenereerde link in je browser.

---

## 📸 Screenshots
![Screenshot 2025-05-19 201101](https://github.com/user-attachments/assets/5bf51b5e-27e2-4da2-9b8b-7664e3ced488)
![Screenshot 2025-05-19 201117](https://github.com/user-attachments/assets/d51a7d5c-7021-4367-ab7d-b148cbfc0cd8)
![Screenshot 2025-05-19 201129](https://github.com/user-attachments/assets/2fbafb01-1b38-4677-b460-64d23de41606)
![Screenshot 2025-05-19 201148](https://github.com/user-attachments/assets/5e4389ae-f8ff-418f-b264-6b2ef2f9a228)
![Screenshot 2025-05-19 201157](https://github.com/user-attachments/assets/8e88161e-f11b-4aaa-b070-739d1c1aa9f5)
![Screenshot 2025-05-19 201208](https://github.com/user-attachments/assets/9ded4dea-3132-4a7e-8e81-543f5018694e)
![Screenshot 2025-05-19 201219](https://github.com/user-attachments/assets/e51c1167-cc82-4445-80ab-8cd9d558d143)
![Screenshot 2025-05-19 201224](https://github.com/user-attachments/assets/3a01c6aa-0d43-4602-b635-e822e5ce4958)
![Screenshot 2025-05-19 201240](https://github.com/user-attachments/assets/a56a2643-b159-4ceb-9619-779d16254400)
![Screenshot 2025-05-19 201246](https://github.com/user-attachments/assets/a9f6aa86-4dfd-41e5-b572-af8d03d8f00f)





---

## 📚 Bronnen

* 📖 [TMDb API Docs](https://developer.themoviedb.org)
* 📘 [MDN Web Docs - JavaScript, Fetch, CSS](https://developer.mozilla.org)
* 🤖 [ChatGPT Prompts](https://chatgpt.com/share/6821f38b-baec-8004-8d8d-598cfc0c9e43) *(meer in projectbeschrijving)*
  - https://chatgpt.com/share/682b6cfd-a7e0-8005-805e-1a5c1136f76c
  - https://chatgpt.com/share/682b6d25-1c60-8005-a18b-f2d25969afdb
  - https://chatgpt.com/share/682b6d3d-9be4-8005-b1f2-27a9aa785d3f
  - https://chatgpt.com/share/682b6d48-5e64-8005-ae2e-53589be240e5 
---

## 👤 Auteur

**Jarno Janssens*
