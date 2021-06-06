import { NumberPlateState } from './number-plate-state.interface';

export interface StateSummarizingResponse {
  numberPlatesFree: NumberPlateState[];
  numberPlatesBooked: NumberPlateState[];
  numberPlatesTaken: NumberPlateState[];
}
