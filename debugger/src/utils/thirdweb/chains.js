import { polygon, polygonAmoy, defineChain } from "thirdweb/chains";
 
export const polygonChain = polygon;
export const polygonAmoyChain = polygonAmoy;

const chain = defineChain({
  id: 31337,
  rpc: "http://127.0.0.1:8545/"
})


export const chainById = chain;