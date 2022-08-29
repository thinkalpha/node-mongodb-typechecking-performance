import { Collection, Db } from "mongodb";
import { CircularModel } from "./circular-model";
import { SlowModel, SlowModelPatch } from "./slow-model";

export class ExampleImpl {
    private circularCol: Collection<CircularModel>;
    private slowCol: Collection<SlowModel>;

    constructor(db: Db) {
        this.circularCol = db.collection("circular");
        this.slowCol = db.collection("slow");
    }

    public method = async (): Promise<void> => {
        /*
         * This call shows the base issue with recursive types
         */
        await this.circularCol.findOne({});
    };

    public update = async (
        patch: SlowModelPatch,
        prop1: string
    ): Promise<void> => {
        /*
         * This call shows the major issue with type inference causing
         * an infinite typechecking loop / major slowdown in TypeScript
         * compilation times
         */
        await this.slowCol.updateOne({}, { $set: { ...patch, prop1 } });
    };
}
