# Workload Management Dashboard

A modern React-based dashboard application for managing assignments and workload items. Built with TypeScript, Vite, and Zustand for state management.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [State Management](#state-management)
- [Components](#components)
- [Development](#development)
- [Build](#build)

## 🎯 Overview

This application provides a workload management interface where users can:
- Create and manage assignments
- Add items to assignments
- Track item properties (Stuff Number, Fictive status, comments)
- View assignments organized by months
- Manage workload data with a clean, intuitive UI

## ✨ Features

### Assignment Management
- **Add Assignments**: Create new assignments with title and metadata
- **Delete Assignments**: Remove assignments from the dashboard
- **View Assignments**: Display all assignments with their associated items

### Item Management
- **Add Items**: Add new items to assignments
- **Delete Items**: Remove items from assignments
- **Item Properties**:
  - **Stuff Number**: Numeric value between 0-5 (supports one decimal place)
  - **Fictive Status**: Toggle checkbox to mark items as fictive (displayed in red)
  - **Comments**: Add and edit comments for each item
  - **Acting As**: Select dropdown for role assignment

### UI Features
- **Month Selection**: Navigate through months of the year
- **Color Labels**: Visual indicators for different item states
- **Responsive Design**: Clean, modern interface with Tailwind CSS
- **Toast Notifications**: User feedback for actions and errors

## 🛠 Tech Stack

### Core
- **React 19.2.0**: UI library
- **TypeScript 5.9.3**: Type safety
- **Vite 7.2.4**: Build tool and dev server

### State Management
- **Zustand 5.0.9**: Lightweight state management

### UI Libraries
- **Tailwind CSS 4.1.17**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
  - `@radix-ui/react-checkbox`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-select`
- **Lucide React**: Icon library
- **Sonner**: Toast notifications

### Utilities
- **UUID**: Unique ID generation
- **clsx & tailwind-merge**: Conditional class names
- **class-variance-authority**: Component variants

## 📁 Project Structure

```
my-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   │   ├── checkbox.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── month-ui.tsx
│   │   │   ├── select.tsx
│   │   │   ├── sonner.tsx
│   │   │   └── spinner.tsx
│   │   ├── delete-item-dialog.tsx
│   │   ├── single-item-actions.tsx
│   │   └── stuff-number-and-is-fictive.tsx
│   ├── features/          # Feature-based components
│   │   └── dashboard/
│   │       └── components/
│   │           ├── add-assignment-dialog.tsx
│   │           ├── add-item-dialog.tsx
│   │           ├── assignments-ui.tsx
│   │           ├── color-labels.tsx
│   │           ├── items-ui.tsx
│   │           └── months-of-year-ui.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── pages/           # Page components
│   │   └── dashboard.tsx
│   ├── store/           # State management
│   │   └── dashboard-store.ts
│   ├── types/           # TypeScript type definitions
│   │   └── types.ts
│   ├── util/            # Helper utilities
│   │   └── generate-id.ts
│   ├── global.css       # Global styles
│   └── main.tsx         # Application entry point
├── components.json      # shadcn/ui configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

## 📖 Usage

### Dashboard Overview

The main dashboard displays:
- User name and "Workload" title
- "New Assignment" button to create assignments
- Month selection interface
- List of assignments with their items
- Color labels legend

### Creating an Assignment

1. Click the **"New Assignment"** button in the top right
2. Fill in the assignment details (title and metadata)
3. The assignment will appear in the assignments list

### Adding Items to an Assignment

1. Click the **"+"** button next to an assignment
2. Fill in the item details:
   - Name
   - Code
   - Stuff Number (0-5, supports one decimal)
3. The item will be added to the assignment

### Managing Item Properties

#### Stuff Number
- Click on the Stuff Number input field
- Enter a value between 0 and 5
- Supports one decimal place (e.g., 2.5)
- Press Enter to save
- Invalid values will show an error toast

#### Fictive Status
- Click the checkbox next to the Stuff Number
- Red background indicates fictive status
- Gray background indicates normal status

#### Comments
- Click on the comment textarea
- Type your comment
- The textarea expands when focused
- Comment is saved automatically on blur

#### Acting As
- Use the dropdown to select a role
- Options: "option 1", "option 2", "option 3"

### Deleting Items

1. Click the delete button next to an item
2. Confirm the deletion in the dialog
3. The item will be removed from the assignment

## 🔄 State Management

The application uses **Zustand** for state management. The main store is located in `src/store/dashboard-store.ts`.

### Store Structure

```typescript
interface DashboardState {
  assignments: assignment[];
  getAssignments: () => assignment[];
  addAssignment: (assignment: assignment) => void;
  deleteAssignment: (id: string) => void;
  removeItemFromAssignment: (itemId: string) => void;
  addItemToAssignment: (assignmentId: string, item: items) => void;
  writeCommentToItem: (itemId: string, comment: string) => void;
  toggleItemFictiveStatus: (itemId: string) => void;
  isItemFictive: (itemId: string) => boolean;
  updateStuffNumber: (itemId: string, stuffNumber: number) => void;
}
```

### Data Models

#### Assignment
```typescript
interface assignment {
  id: string;
  title: string;
  metadata: string;
  items: items[];
}
```

#### Item
```typescript
interface items {
  id: string;
  name: string;
  code: string;
  StuffNumber: number;
  comment?: string;
  isFictive: boolean;
}
```

## 🧩 Components

### Core Components

#### `Dashboard`
Main page component that orchestrates all dashboard features.

#### `AssignmentsUI`
Displays the list of all assignments with their items.

#### `ItemsUI`
Renders items within an assignment with visual indicators.

#### `SingleItemActions`
Manages individual item actions (Stuff Number, Fictive status, Comments, Acting As).

#### `StuffNumberAndIsFictive`
Component for editing Stuff Number and toggling fictive status with validation.

### Dialog Components

#### `AddAssignmentDialog`
Modal dialog for creating new assignments.

#### `AddItemDialog`
Modal dialog for adding items to assignments.

#### `DeleteItemDialog`
Confirmation dialog for deleting items.

### UI Components

The project uses shadcn/ui components:
- `Checkbox`: For fictive status toggle
- `Dialog`: For modals
- `Select`: For dropdowns
- `Toaster`: For notifications

## 🛠 Development

### Available Scripts

- `npm run dev`: Start development server with hot module replacement
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check code quality

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Tailwind CSS for styling
- Functional components with hooks

### Path Aliases

The project uses path aliases configured in `vite.config.ts`:
- `@/` maps to `src/`

Example:
```typescript
import { useDashboardStore } from "@/store/dashboard-store";
```

## 📦 Build

### Production Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Styling

The project uses **Tailwind CSS 4** with:
- Custom color scheme
- Responsive design utilities
- Custom component styles in `global.css`

### Color Scheme
- **Blue**: Primary actions and indicators (`bg-blue-700`, `bg-blue-800`)
- **Red**: Fictive items and errors (`bg-red-200`, `bg-red-400`)
- **Gray**: Backgrounds and borders (`bg-gray-200`, `text-gray-600`)

## 📝 Notes

- The application uses client-side state management only (no backend)
- Data is stored in memory and will be lost on page refresh
- Stuff Number validation: accepts values 0-5 with at most one decimal place
- Fictive items are visually distinguished with red background

## 🔮 Future Enhancements

Potential improvements:
- Backend integration for data persistence
- Export/import functionality
- User authentication
- Advanced filtering and search
- Data visualization and analytics
- Multi-user collaboration

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using React, TypeScript, and Vite**
