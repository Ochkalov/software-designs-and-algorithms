export const transformNumberToString = (number: number): string => {
    const roundedNumberInteger: number = Math.floor(number);
    const numberDivisionRemainder: number = Math.round((number % roundedNumberInteger) * 100) ;
    const numberDivisionRemainderString: string = numberDivisionRemainder ? `${numberDivisionRemainder}` : "00";
    const numberString: string = `${roundedNumberInteger}.${numberDivisionRemainderString}`;
  
    return numberString;
  };