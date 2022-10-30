"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transformText_1 = __importDefault(require("./router/transformText"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 8081;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/transform-text", transformText_1.default);
app.get("/", (req, res) => {
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
app.listen(PORT, () => {
    console.log("listen on port: " + PORT);
});
