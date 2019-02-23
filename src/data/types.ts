export namespace IRadio {
  export interface Dto {
    id?: string | number;
    name: string;
    source: string;
    image: string;
  }

  export interface WithLabel extends Dto {
    label: string;
  }

  export interface WithNewID extends WithLabel {
    id: number;
  }
}

export interface IOldJson {
  [label: string]: IRadio.Dto[];
}
