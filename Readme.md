
# 🍽️ Food Ordering App

This is a responsive React-based food ordering interface where users can browse various meal items and dynamically load more content with a "Show More / Show Less" toggle. The meal data is loaded from a static JSON file for easy deployment and scalability.

---

## 🔧 Features

- 🍕 Diverse food categories like Pizza, Pasta, Salad, Sandwiches, Rolls, etc.
- 👀 Dynamic "Show More" / "Show Less" meal visibility toggle.
- 🎞️ Smooth animations using **Framer Motion**.
- 📁 Static data served via `public/meals.json`.
- 💡 Clean and modular component structure.
- ⚡ Optimized for both local and production (Vercel) environments.

---

## 🛠️ Technologies Used

- **React**
- **Framer Motion**
- **CSS Modules / Custom CSS**
- **Static JSON Data**

---

## 📁 Folder Structure

```

/public
└── meals.json             # Static meal data (JSON)
/public/images/              # Meal images
/src
├── components/
│   ├── Meals.jsx          # Main meals component
│   ├── MealItem.jsx       # Individual meal card
│   └── UI/
│       └── Button.jsx     # Reusable button component
├── App.js
└── index.js

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shubhangi555/Reactjs-Food-Order-Application.git
cd food-ordering-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Static Meal Data

* Create a file `public/meals.json`
* Paste your meal data array inside it

> 📌 **Make sure your images are placed in the `public/images/` folder** and paths match the `image` fields in `meals.json`.

### 4. Start the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

---

## 🌐 Deployment (Vercel)

To deploy on [Vercel](https://vercel.com):

1. Push your project to GitHub.
2. Import it in Vercel Dashboard.
3. Set up build command as:

```bash
npm run build
```

4. Ensure your `meals.json` and images are inside the `public/` folder.
5. Hit Deploy!

---

## 📸 Screenshots

> *Add screenshots here (drag & drop in Markdown)*
> Banner Slider
![image](https://github.com/user-attachments/assets/5c0577bc-bfb0-4181-9e37-593a93b4d09e)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🧠 Future Enhancements

* 🛒 Add Cart & Checkout functionality
* 🔍 Add Search and Category Filter
* 🌐 API Integration (Dynamic Backend)
* ✅ Improve Accessibility and Mobile Experience

---

Made with ❤️ using React & Framer Motion


