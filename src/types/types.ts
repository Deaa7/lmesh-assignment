export interface items {
  id: string;
  name: string;
  code: string;
  StuffNumber: number;
  comment?: string;
  isFictive: boolean;
}

export interface assignment {
  id: string;
  title: string;
  metadata: string;
  items: items[];
}

export interface DashboardState {
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
