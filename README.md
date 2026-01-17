# AIDD Course

Next.js application built with React and TypeScript.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

### Running All Tests and Validation

To run all validation checks (linter, formatter, TypeScript type checking, and tests) in one command:

```bash
npm run validate
```

This command runs the following checks in sequence:
1. **Lint** - ESLint code quality checks
2. **Format Check** - Prettier formatting verification
3. **TypeCheck** - TypeScript type checking (no emit)
4. **Tests** - Jest test suite

The script will stop at the first failure. All checks must pass for the validation to succeed.

### Other Scripts

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run Jest tests

## Project Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
