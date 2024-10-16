"use client";






import { useActiveAccount } from "thirdweb/react";





import {  ConnectButton } from "@/utils/thirdweb/thirdweb";

import { Button } from "@material-tailwind/react";


// Contracts
import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";


import {  client  } from "@/utils/thirdweb/client";
import {  chainById } from "@/utils/thirdweb/chains";





const contractName = getContract({
  client,
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  chain: chainById,
});

const contract = getContract({
  client,
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  chain: chainById,
});




export default function Home() {
  
  // console.log("contract2", contract2);


  const activeAccount = useActiveAccount();




  const { data: name, isLoading: loadsource } = useReadContract({
    contractName,
    method: "function name() returns (string)",
  });
console.log(name);






















    // const { data: passportBalance, isLoading: loadn } = useReadContract({
    //   contractPassport,
    //   method: "function balanceOf(address account, uint256 id) returns (uint256)",
    //   params: ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 1n],
    // });

  //   if(passportBalance > 0){
  //     router.push("/home");
  //   }
  //   console.log("data", passportBalance);





  


  

  return ( 
    <main className="">
      <div className="flex flex-col justify-center items-center gap-3">
        {/* <Link href="/"> */}
          <ConnectButton client={client} chain={chainById} connectButton={{ label: "Login" }}/>
        {/* </Link> */}
          <Button className="w-40">Join GuildBank-(its free)</Button>    
      </div>
    </main>
  )
}
