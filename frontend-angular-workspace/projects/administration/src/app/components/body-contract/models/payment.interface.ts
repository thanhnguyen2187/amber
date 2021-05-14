export interface Payment {
  paymentId: number;
  contractId: number;
  amount: number;
  note: string;
  dateCreated: Date;
  dateCreatedDisplay?: string;
  editing?: boolean;
  removing?: boolean;
}
