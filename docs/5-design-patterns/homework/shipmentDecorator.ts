import { IShipment } from "./types";

enum Codes {
    fragile = '**MARK FRAGILE**',
    doNotLeave = '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**',
    returnReceiptRequested = '**MARK RETURN RECEIPT REQUESTED**',
  }
  
  class ShipmentDecorator implements IShipment {
    protected wrapper: IShipment;
  
    constructor(shipment: IShipment) {
      this.wrapper = shipment;
    }
  
    public ship(): string { return this.wrapper.ship() }
  }
  
  export class ShipmentWithCodeDecorator extends ShipmentDecorator {
    private fragile: boolean;
    private doNotLeave: boolean;
    private returnReceiptRequested: boolean;
  
    constructor(shipment: IShipment, fragile: boolean, doNotLeave: boolean, returnReceiptRequested: boolean) {
      super(shipment);
      this.fragile = fragile;
      this.doNotLeave = doNotLeave;
      this.returnReceiptRequested = returnReceiptRequested;
    }
  
    public ship(): string {
      let code = '';
      if (this.fragile) {
        code += `\n${Codes.fragile}`;
      }
      if (this.doNotLeave) {
        code += `\n${Codes.doNotLeave}`;
      }
      if (this.returnReceiptRequested) {
        code += `\n${Codes.returnReceiptRequested}`;
      }
  
      return `${this.wrapper.ship()}${code}`;
    }
  }