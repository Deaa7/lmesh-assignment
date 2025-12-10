import { create } from "zustand";
import type { DashboardState, assignment, items } from "@/types/types";
import { generateId } from "@/util/generate-id";

const defaultAssignments: assignment[] = [
  {
    id: generateId(),
    title: "Innovation",
    metadata: "| Europe | RN-VCC | Renault ",
    items: [
      {
        id: generateId(),
        name: "DE",
        code: "MR10R302",
        StuffNumber: 2,
        isFictive: false,
      },
      {
        id: generateId(),
        name: "PDM for Offshore",
        code: "MR10R303",
        StuffNumber: 2,
        isFictive: false,
      },
    ],
    },
    
    {
        id: generateId(),
        title: "P85 IP",
        metadata: "| Europe | RN-VCC | PSA",
        items: [
          {
            id: generateId(),
            name: "DE",
            code: "MR10R302",
            StuffNumber: 0,
            isFictive: false,
          },
          {
            id: generateId(),
            name: "PDM for Offshore",
            code: "MR10R303",
            StuffNumber: 0,
            isFictive: false,
          },
        ],
      },
];

export const useDashboardStore = create<DashboardState>((set, get) => ({
  assignments: defaultAssignments,

  getAssignments: () => get().assignments,
  addAssignment: (assignment: assignment) =>
    set((state) => ({ assignments: [...state.assignments, assignment] })),

  deleteAssignment: (id: string) =>
    set((state) => ({
      assignments: state.assignments.filter(
        (assignment) => assignment.id !== id
      ),
    })),

  removeItemFromAssignment: (itemId: string) =>
    set((state) => ({
      assignments: state.assignments.map((assignment) => ({
        ...assignment,
        items: assignment.items.filter((item) => item.id !== itemId),
      })),
    })),

  addItemToAssignment: (assignmentId: string, item: items) =>
    set((state) => ({
      assignments: state.assignments.map((assignment) =>
        assignment.id === assignmentId
          ? { ...assignment, items: [...assignment.items, item] }
          : assignment
      ),
    })),

  writeCommentToItem: (itemId: string, comment: string) =>
    set((state) => ({
      assignments: state.assignments.map((assignment) => ({
        ...assignment,
        items: assignment.items.map((item) =>
          item.id === itemId ? { ...item, comment } : item
        ),
      })),
    })),


  toggleItemFictiveStatus: (itemId: string) =>

    set((state) => ({
      assignments: state.assignments.map((assignment) => ({
        ...assignment,
        items: assignment.items.map((item) =>
          item.id === itemId ? { ...item, isFictive: !item.isFictive } : item
      ),
    })),
  })),

  updateStuffNumber: (itemId: string, stuffNumber: number) =>
    set((state) => ({
      assignments: state.assignments.map((assignment) => ({
        ...assignment,
        items: assignment.items.map((item) =>
          item.id === itemId ? { ...item, StuffNumber: stuffNumber } : item
        ),
      })),
    })),
  isItemFictive: (itemId: string) =>
    get().assignments.find((assignment) =>
      assignment.items.some((item) => item.id === itemId)
    )?.items.find((item) => item.id === itemId)?.isFictive || false,
}));
