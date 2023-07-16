import { Shipment } from './shipment';
import { IApi, ShipmentData, IdGenerator, IShipment, Context } from './types';
import { FakeIdGenerator } from './id-generator';
import { ShipperContext } from './shipperStrategy';
import { ShipmentWithCodeDecorator } from './shipmentDecorator';

export class Client implements IApi {
  private idGenerator: IdGenerator;
  private shipperCostContext: Context;

  public constructor(idGenerator: IdGenerator, shipperCostContext: Context) {
    this.idGenerator = idGenerator;
  }

  public shipItem(shipmentData: ShipmentData): string {
    const { fragile, doNotLeave, returnReceiptRequested } = shipmentData
    let shipment: IShipment = Shipment.getInstance(shipmentData, this.idGenerator, this.shipperCostContext);
    shipment = new ShipmentWithCodeDecorator(shipment, fragile, doNotLeave, returnReceiptRequested); 
    return shipment?.ship();
  }
}

export const api: Client = new Client(new FakeIdGenerator(), new ShipperContext());