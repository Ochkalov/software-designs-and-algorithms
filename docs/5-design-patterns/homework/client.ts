import { Shipment } from './shipment';
import { IApi, ShipmentData, IdGenerator, IShipment } from './types';
import { FakeIdGenerator } from './id-generator';

export class Client implements IApi {
  private idGenerator: IdGenerator;
  public constructor(idGenerator: IdGenerator) {
    this.idGenerator = idGenerator;
  }

  public shipItem(shipmentData: ShipmentData): string {
    const shipment: IShipment = Shipment.getInstance(shipmentData, this.idGenerator);
    return shipment?.ship();
  }
}

export const api: Client = new Client(new FakeIdGenerator());