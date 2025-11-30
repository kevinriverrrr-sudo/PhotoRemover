# Contributing to PhotoRemover

First off, thank you for considering contributing to PhotoRemover! It's people like you that make PhotoRemover such a great tool.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How Can I Contribute?](#how-can-i-contribute)
4. [Style Guidelines](#style-guidelines)
5. [Commit Messages](#commit-messages)
6. [Pull Requests](#pull-requests)

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. By participating, you are expected to uphold this standard.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/PhotoRemover.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Set up your `.env` file with API keys (see README.md)
6. Start development server: `npm run dev`

## How Can I Contribute?

### Reporting Bugs

- Use the GitHub Issues page
- Use the bug report template
- Include detailed steps to reproduce
- Include screenshots if applicable
- Mention your environment (OS, browser, Node version)

### Suggesting Enhancements

- Use the GitHub Issues page
- Use the feature request template
- Clearly describe the feature and its benefits
- Consider if it fits the project's scope

### Code Contributions

#### Adding New API Services

1. Add service configuration to `src/services/config.ts`
2. Implement the API call in `src/services/api.ts`
3. Update TypeScript types in `src/types/index.ts`
4. Add service to UI in `src/components/ApiSelector.tsx`
5. Update `.env.example` with new variables
6. Document the service in README.md
7. Test thoroughly with the actual API

#### Improving UI/UX

1. Follow the existing design system
2. Maintain responsiveness
3. Test on multiple screen sizes
4. Ensure accessibility standards
5. Keep the 3D effects performant

#### Bug Fixes

1. Reference the issue number in your PR
2. Add tests if applicable
3. Ensure the fix doesn't break other features
4. Update documentation if needed

## Style Guidelines

### TypeScript

- Use TypeScript for all new files
- Define proper types (avoid `any`)
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

```typescript
// Good
interface ImageProcessorProps {
  selectedFile: File | null
  setSelectedFile: (file: File | null) => void
}

// Bad
interface Props {
  file: any
  setFile: Function
}
```

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use proper prop types

```typescript
// Good
export default function ImageProcessor({ 
  selectedFile, 
  setSelectedFile 
}: ImageProcessorProps) {
  // component logic
}

// Bad
function Component(props: any) {
  // component logic
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Follow the existing color scheme
- Use custom CSS only when necessary
- Keep responsive design in mind

```typescript
// Good
<div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform">

// Avoid inline styles unless dynamic
<div style={{ color: dynamicColor }}>
```

## Commit Messages

Use conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(api): add support for Pixian.AI service

fix(ui): resolve image preview not showing on Safari

docs(readme): update API setup instructions

style(components): format code with prettier

refactor(services): extract common API logic
```

## Pull Requests

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Self-review of your code completed
- [ ] Comments added for complex code
- [ ] Documentation updated if needed
- [ ] No new warnings or errors
- [ ] Tested on multiple browsers
- [ ] Responsive design verified

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested on multiple browsers
```

### Review Process

1. Submit your PR
2. Wait for automated checks to pass
3. Address any review comments
4. Once approved, it will be merged

## Development Tips

### Testing API Services

Create a test `.env` file:

```env
VITE_REMOVEBG_API_KEY=test_key
VITE_SELECTED_SERVICE=removebg
```

### Debugging 3D Scene

```typescript
// Add to Scene3D.tsx for debugging
import { OrbitControls, Stats } from '@react-three/drei'

// Inside Scene3D component
<Stats />
<OrbitControls />
```

### Performance Testing

```bash
# Build and analyze bundle size
npm run build
npx vite-bundle-visualizer
```

## Questions?

Feel free to:
- Open an issue for questions
- Join discussions on GitHub
- Contact the maintainer

Thank you for contributing! 🎉