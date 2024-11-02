export interface CardData {
  id?: string; 
  cardTitle: string; 
  content: any; // mongoose.Schema.Types.Mixed allows any type
  createdAt: Date; 
  updatedAt: Date; 
  dueDate?: Date; 
  tag?: string; 
  foldOrNot: Boolean,
  position: { 
    x: number;
    y: number;
  };
  dimensions: { 
    width: number;
    height: number;
  };
  connection?: Array<{ 
    toNoteId: number; // 0 (Up), 1 (Right), 2 (Down), 3 (Left)
    connectionId: string; 
  }>;
  connectionBy?: Array<{
    toNoteId: number;
    position: Number // 0 (Up), 1 (Right), 2 (Down), 3 (Left)
}>;
  comments?: Array<{ 
    commentId: string; 
    userId: string; 
    content: string;
    createdAt: Date; 
  }>;
}
