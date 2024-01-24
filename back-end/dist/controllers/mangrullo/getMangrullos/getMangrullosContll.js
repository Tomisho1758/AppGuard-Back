"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMangrullos = void 0;
const mangrullo_1 = require("../../../models/mangrullo/mangrullo");
//Ruta para consultar todos los Mangrullos.
const searchMangrullos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //mangrullos esta definido como un array de objetos de mangrullos.
        const mangrullos = yield mangrullo_1.Mangrullo.findAll({
            where: {
                state: "Activo",
            },
        });
        return res.status(201).json(mangrullos);
    }
    catch (error) {
        return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
});
exports.searchMangrullos = searchMangrullos;
