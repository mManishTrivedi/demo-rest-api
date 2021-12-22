export class TransactionsCreateDto {
  public uid: string; // created by
  public amount: number;
  // readonly paid_at: Date; // created at
  // TODO: enum type and write constant
  // automatic, manual
  public type: string;
  // if it's manual payment, else null
  public paid_to?: string;
  public expenses_ids: [string];
  comment: string;
}
