
import {  client  } from "@/utils/thirdweb/client";
import {  chainById } from "@/utils/thirdweb/chains";
import { getContract } from "thirdweb";





export const contract1 = getContract({
    client,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    chain: chainById,
  });
  
  
