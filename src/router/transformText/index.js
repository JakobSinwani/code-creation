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
const express_1 = require("express");
const transform_txt_file_1 = require("../../utils/transform_file/transform_txt_file");
const router = (0, express_1.Router)();
const HARRY_POTTER = "harry-potter";
const WAR_AND_PEACE = "war-and-peace";
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, transform_txt_file_1.book)(`assets/${HARRY_POTTER}/combine1.txt`, WAR_AND_PEACE);
    res.send(result);
}));
router.post("/", (req, res) => {
    console.log("start");
    console.log(req);
    res.send("hello!!!");
});
exports.default = router;
