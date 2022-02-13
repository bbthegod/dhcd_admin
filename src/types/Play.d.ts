interface Play {
  comment: string;
  interviewScore: number;
  interviewer: string;
  isInterviewed: boolean;
  questions: Question;
  timeOut: Date;
  totalScore: number;
  userID: User;
  createdAt: Date;
  updatedAt: Date;
}
