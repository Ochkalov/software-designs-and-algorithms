import { api } from './Client';
import { IApi, ShipmentData } from './types';

class FEClient {
  private api: IApi;

  public constructor(api: IApi) {
    this.api = api;
  }

  public shipItem(data: ShipmentData): void {
    const res: string = this.api?.shipItem(data);
    console.log(res);
  }
}

const client: FEClient = new FEClient(api);

client.shipItem({
  shipmentID: 1,
  weight: 5,
  fromAddress: 'Kyiv',
  fromZipCode: '12345',
  toAddress: 'New York',
  toZipCode: '10000',
  fragile: true,
  doNotLeave: true,
  returnReceiptRequested: true,
});