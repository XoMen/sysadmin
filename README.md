# Project Technologies Overview

This document outlines the technologies and libraries utilized in the project, categorized by their functionality.

### Base Technologies

- TypeScript: A superset of JavaScript that adds static typing for better development experiences.
- React: A JavaScript library for building user interfaces, particularly single-page applications.
- Vite: A fast build tool and development server for modern web projects.

### Routing

- react-router-dom: A library for handling routing and navigation within the React application.

### Calendar Functionality

- @fullcalendar: A powerful calendar library for displaying and managing events.
- litepicker: A lightweight date picker for selecting dates easily.

### Forms Management

- @ckeditor: An HTML editor for rich text editing capabilities.
- react-hook-form: A performant and flexible library for managing form state and validations.
- yup: A schema builder for runtime value parsing and validation.
- dropzone: A library for drag-and-drop file uploads.
- @hookform/resolvers: Integrates various validation libraries with react-hook-form.

### State Management

- @redux/toolkit: The official, recommended way to write Redux logic, simplifying store setup and state management.
- react-redux: Connects React components to the Redux store.

### UI Components & Styling

- @headlessui/react: A set of completely unstyled, fully accessible UI components.
- lucide: An icon library offering a wide range of icons.
- lucide-react: Integration of Lucide icons with React components.
- react-transition-group: Provides transition effects for React components.
- simplebar: Custom scrollbar implementation for enhanced user experience.
- tabulator-tables: A feature-rich table grid library for displaying data in tabular format.
- tiny-slider: A lightweight slider/carousel library for showcasing images or content.
- tippy.js: A versatile tooltip, popover, dropdown, and menu solution for web applications.
- toastify-js: A simple library for creating toast notifications in the application.
- tom-select: An enhanced select box library for improved user experience.
- zoom-vanilla.js: Enables image zooming functionality upon clicking.

### Data Visualization

- chart.js: A popular library for creating responsive and interactive charts.
- leaflet: A leading open-source JavaScript library for mobile-friendly interactive maps.

### Utility Libraries

- dayjs: A lightweight library for parsing, validating, manipulating, and displaying dates and times.
- flat: Flattens nested objects into a single-level object structure.
- highlight.js: Syntax highlighting library for displaying code snippets in various programming languages.
- js-beautify: Formats JavaScript code to improve readability and structure.
- xlsx: Library for creating and manipulating Excel files, enabling easy data export.

<br/>
<br/>

# Project Structure Overview

The project is organized into a well-defined directory structure to enhance maintainability and facilitate collaboration. Below is an overview of the key directories and their purposes.

### Source Directory (src)

- types/: Contains type declarations for external libraries to ensure type safety and improved development experience.
- utils/: Utility functions that provide common functionalities used throughout the project, promoting code reuse.

- themes/: Configuration files for the project's themes, allowing for easy customization of styles and appearances.

- stores/: Redux slices that manage the application's state, encapsulating related logic and actions.

- router/: Contains the sitemap of the project routes, mapping paths to their corresponding page components.

- pages/: All page components are defined here, representing the various views within the application.

- fakers/: Sample data generation scripts that provide fake data for testing and development purposes.

- components/: Reusable UI components such as charts, calendars, and other widgets are organized in this directory.

---

### Assets Directory (src/assets)

- images/: A centralized location for all images used in the project, ensuring easy access and organization.

- json/: Contains JSON files, including location data for Leaflet maps, structured for efficient retrieval.

- css/: Contains CSS files associated with the project's styling, ensuring separation of styles from component logic.

---

### CSS Subdirectory (src/assets/css)

- vendors/: Custom styles for third-party libraries are defined here to override or extend default styles as needed.

- fonts/: Configuration for fonts used in the project, including imports and font-face definitions.

- themes/: Theme-specific styles are organized in this directory, allowing for easy modification and management of visual themes.

- rtl.css: Styles specifically configured for right-to-left (RTL) layouts, ensuring support for languages that require this orientation.

---
