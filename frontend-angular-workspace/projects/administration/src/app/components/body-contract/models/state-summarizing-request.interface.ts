export interface StateSummarizingRequest {
  dateStart?: Date;
  dateEnd?: Date;
  bikeName: string;
  numberPlate: string;
  types: string[];
}
