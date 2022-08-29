import { UUID as MUUID } from "bson";

export interface Model extends ModelBase {}

export interface SpecificModel extends Model {}

export interface ModelBase {
    another: AnotherSpecificModel;
}

export interface AnotherSpecificModel {
    specifics: SpecificModel[];
}

export interface CircularModel {
    _id: MUUID;
    data: SpecificModel;
}
