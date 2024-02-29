import { proxy } from "valtio";

const state = proxy({
    color: '#FF0000'
});

export default state;