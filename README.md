# 🌈 AltCSS
Welcome to AltCSS, the opinionated, unconventional, lightweight CSS component library you didn't know you needed! 🎉

## 📚 Overview
AltCSS is all about simplicity and style, without the fuss. It's built on Tailwind CSS and designed to make your web projects look sleek and modern with minimal effort. 

## 🚀 Features
- **Typography**: Beautifully styled headings, paragraphs, and links to make your content pop.
- **Layouts**: Easy-to-use structural elements like sections and articles, with card designs and responsive tables.
- **Base Styles**: Simple yet elegant base styles for a consistent look across your site.

## 🌟 Design Principles
1. **Don't write class names.**
2. **Don't write CSS.**
3. **Keep it simple.**
4. **Keep it clean.**

Interested to know more about why I created this? Read this [blog post](https://medium.com/p/8f8e11f4a875).

## 📦 Installation
To get started with Alt CSS, add it to your project:

```sh
npm install altcss
```
```sh
pnpm add altcss
```
```sh
bun add altcss
```

## 🛠 Usage

Import AltCSS in your project (E.g. In sveltekit, you would import this under the script tag of +layout.svelte):

```ts
import 'altcss/alt.min.css';
```

And voilà! You're ready to go. Just use native html without any further CSS in your project.

## 📝 Documentation
Only these tags are supported at the moment. More will be added soon. To understand how to use them, you can refer to index.html.

### Typography
- **Headings**: `h1`, `h2`, `h3`, `h4`
- **Text**: `p`
- **Links**: `a`

### Layouts
- **Sections**: `section`, `article`
- **Cards**: `div` elements with nested structures
- **Tables**: Responsive and clean table designs

### Base
- **Body**: Responsive margins and padding
- **Horizontal Rule**: Stylish horizontal lines

## 📄 Example
Here's a quick example to see Alt CSS in action: https://aditya-xq.github.io/altcss/

## 🚧 Roadmap
- Design frequently used HTML tags
- Clean and minify CSS
- Light/Dark mode
- Design builder

## 📜 License
Alt CSS is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## 🎉 Acknowledgments
Special thanks to the Tailwind CSS community for their amazing work. Also, special mention to ChatGPT for being the awesome companion in helping with debugging, writing code and creative support.

## Caution
This project is frequently updated.
