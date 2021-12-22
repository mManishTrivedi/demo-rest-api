export class ExpensesCreateDto {
  readonly name: string;
  gid: string;
  readonly amount: number;
  // todo: define separate interface.
  // Currently we support only fixed share amount
  // {type: , value: [{uid, amount}]}
  readonly share: any;
  readonly paid_by: string;
  readonly paid_at: Date;
}
