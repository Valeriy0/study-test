import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import { useWeb3React } from '@web3-react/core'
import { ActivateModal } from '@/components/ActivateModal';
import { useGetContract } from '@/helpers/hooks/useGetContract';
import config from '@/helpers/config';
import { LevelCard } from '@/components/LevelCard';
import { wallets } from '@/helpers/allWallets';

const inter = Inter({ subsets: ['latin'] })

const Index = () => {
  const { getContract } = useGetContract();
  const [openedModal, setOpenedModal] = useState(false);
  const { account } = useWeb3React();
  const [isActiveCount, setIsActiveCount] = useState(0);
  const [isNotActiveCount, setIsNotActiveCount] = useState(0);

  const [totalBnbForUpg, setTotalBnbForUpg] = useState(0);
  const [totalBnbForRefound, setTotalBnbForRefound] = useState(0);


  // useEffect(() => {
  //   window.location.href = 'https://busd.forsage.io/';
  // }, [])

  const Lvls = [
    0.021,
    0.027,
    0.036,
    0.049,
    0.065,
    0.091,
    0.128,
    0.178,
    0.248,
    0.348,
    0.458,
    0.647,
  ]

  console.log(wallets)

  let fundDouble = [];

  return (
    <div className="w-screen flex flex-col items-center justify-center space-y-2">
      <span> Eto test obucha </span> 
      <a className='text-2xl underline' href="/test1"> - eto 1 - </a>
      <a className='text-2xl underline' href="/test2"> - eto 2 - </a>
    </div>
  )
}
export default Index;