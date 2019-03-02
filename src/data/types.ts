// export namespace IRadio {
  export interface IRadioDto {
    id?: string | number;
    name: string;
    source: string;
    image: string;
  }

  export interface IRadioWithLabel extends IRadioDto {
    label: string;
  }

  export interface IRadioWithNewID extends IRadioWithLabel {
    id: number;
  }
// }

export interface IOldJson {
  [label: string]: IRadioDto[];
}
