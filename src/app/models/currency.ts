export class currency {
    id: number;
    price: number;
    competitors: {
      Traveloka: number;
      Expedia: number;
    };
    taxes_and_fees: {
      tax: number
      hotel_fees: number;
    }
}