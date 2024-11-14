import { LibraryController } from "./controllers/LibraryController.js";
import { BookForm } from "./views/BookForm.js";
import { BookList } from "./views/BookList.js";

const bookForm = new BookForm();
const bookList = new BookList();
const libraryController = new LibraryController(bookForm, bookList);

bookForm.render(libraryController.addBook.bind(libraryController));
bookList.render(
    libraryController.books,
    libraryController.deleteBook.bind(libraryController),
    libraryController.editBook.bind(libraryController)
);

// document 
//     .getElementById("theme-toggle")
//     .addEventListener(
//         "click",
//         libraryController.toggleTheme.bind(libraryController)
//     );
// libraryController.initTheme();

// Select the theme toggle button and icon
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Load saved theme from localStorage if available
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        updateThemeIcon();
    }
});

// Toggle theme function
themeToggleButton.addEventListener('click', () => {
    // Toggle between light and dark theme classes
    document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-light');

    // Save current theme to localStorage
    const currentTheme = document.body.classList.contains('theme-dark') ? 'theme-dark' : 'theme-light';
    localStorage.setItem('theme', currentTheme);

    // Update the icon based on the current theme
    updateThemeIcon();
});

// Update theme icon
function updateThemeIcon() {
    if (document.body.classList.contains('theme-dark')) {
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
    } else {
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
    }
}