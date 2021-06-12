export interface ModelTypes {
  Id: number;
  BrandId: string;
  Name: string;
  TypeId: number;
  Comment: string;
  Description: string;
}

export interface ModelData {
  Id: number;
  DataType: string;
  Brand: string;
  Model: string;
  DisplayName: string;
  Description: string;
  Status: null | string;
  GroupId: null | number;
  ProtocolOrder: null | number;
}