<p align="center">
  <img src="src/assets/icons/logo.svg" height="120"/>
  <h1 style="text-align: center">Atlys Assignment</h1>
</p>

This is the implementation of the frontend engineering assignment for Atlys.

## Dev notes

This project has been built with `Vue3` along with minimal dependencies to keep the bundle size slim.

The only 2 dependencies are `Vue` and `Vue Router`.

All the components have been crafted from scratch using vanilla HTML and `TailwindCSS` (dev-dependency)

The necessary development time dependencies are:
| Package | Usecase |
|-----------------|--------------------------------|
|`ESLint` | for linting and code quality |
|`Prettier` | for standard code formatting |
|`Tailwind` | for adding CSS utility classes |
|`Vite SVG Loader`| to load SVGs as Vue components |
|`Vue devtools` | for debugging |

## Project Structure and Code Format

For managing the project I'm using a variation of the Atomic Design methodology for the component system, where:

`Atoms` are the basic primitive blocks - like Buttons, Inputs etc.

`Elements` are a more abstract layer of reusable components like - Cards, Modals, etc.

`Componds` are complex chunks of reusable logic components - for example the Login form.

All components follow the latest standard of Vue3 to use `script setup` syntax in the SFC and are written in Typescript for compile time static checks for type safety.

## Project Setup

Your system needs to have Node (recommended v20+) and [pnpm](https://pnpm.io/) installed.

Install all dependencies first with:

```sh
pnpm install
```

### Preview the project for evaluation

```sh
pnpm preview
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```
