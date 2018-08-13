"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonSchema = {
    name: "Person",
    columns: {
        Id: {
            primary: true,
            type: "int",
            generated: "increment"
        },
        FirstName: {
            type: String,
            length: 30
        },
        LastName: {
            type: String,
            length: 50,
            nullable: false
        }
    },
    relations: {},
    indices: {
        IDX_TEST: {
            unique: false,
            columns: [
                "FirstName",
                "LastName"
            ]
        }
    }
};
//# sourceMappingURL=Person.js.map