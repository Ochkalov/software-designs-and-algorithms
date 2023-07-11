import { Shipment } from './shipment';
import { IApi, ShipmentData, IdGenerator, IShipment, Context } from './types';
import { FakeIdGenerator } from './id-generator';
import { ShipperContext } from './shipperStrategy';

export class Client implements IApi {
  private idGenerator: IdGenerator;
  private shipperCostContext: Context;

  public constructor(idGenerator: IdGenerator, shipperCostContext: Context) {
    this.idGenerator = idGenerator;
  }

  public shipItem(shipmentData: ShipmentData): string {
    const shipment: IShipment = Shipment.getInstance(shipmentData, this.idGenerator, this.shipperCostContext);
    return shipment?.ship();
  }
}

export const api: Client = new Client(new FakeIdGenerator(), new ShipperContext());