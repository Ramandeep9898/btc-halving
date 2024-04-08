import "./App.css";
import { InfoBox } from "./components/Timer/Timer";
import { Typography, Sheet, Header } from "./components/";
import { useEffect, useState } from "react";
import { aboutBTCHalvingConfig } from "./config/aboutBTCHalvingConfig.ts";

function App() {
  const [date, setDate] = useState<any>(null);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getCryptoDetails = async () => {
      try {
        const responseBlockchain = await fetch(
          "https://api.blockchain.info/stats"
        );
        const dataBlockchain = await responseBlockchain.json();
        const responseExchangeRate = await fetch(
          "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR"
        );
        const dataExchangeRate = await responseExchangeRate.json();
        const eventBlockHeight = dataBlockchain.n_blocks_total;
        const currentBlockHeight = dataBlockchain.n_blocks_total;
        const blockTime = dataBlockchain.minutes_between_blocks;
        const marketCap = (
          dataBlockchain.market_price_usd *
          (dataBlockchain.totalbc / 100000000)
        ).toFixed(2);
        const difficulty = dataBlockchain.difficulty;
   
        const estTimeRemainingMinutes =
          Number(dataBlockchain.minutes_between_blocks) *
          Number(1711);

        const estTimeRemainingMillis = estTimeRemainingMinutes * 60 * 1000;

        const currentDate = new Date();
        const retargetDate = new Date(
          currentDate.getTime() + estTimeRemainingMillis
        );
        const formattedRetargetDate = retargetDate
          .toISOString()
          .replace(/\.\d+Z$/, "");

        setDate(formattedRetargetDate);
        const data = [
          {
            name: "Event Block Height",
            value: eventBlockHeight,
          },

          {
            name: "Current Block Height",
            value: currentBlockHeight,
          },
          {
            name: "Block Time",
            value: blockTime,
          },
          {
            name: "Exchange Rate USD",
            value: dataExchangeRate.USD,
          },
          {
            name: "Market Cap",
            value: marketCap,
          },
          {
            name: "Difficulty",
            value: difficulty,
          },
          {
            name: "Next Bitcoin Halving Date",
            value: "17th April, 2024",
          },
        ];
        setData(data);

   
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCryptoDetails();
  }, []);


  return (
    <div className="flex justify-center items-center  flex-col">
      <Header />
      <div className="flex justify-center items-center my-9 flex-col">
        <div className="flex justify-center items-center gap-2 mb-4">
          <img
            className="w-[40px]"
            src="https://nordl.io/_next/static/media/Crash_Bitcoin_Concept.3c9ead0a.svg"
          />
          <Typography variant="title">
            Live Bitcoin halving countdown.
          </Typography>
        </div>

        <Sheet subTitle="Est. Time Remaining">
          <div className="flex items-center justify-center">
            {date && <InfoBox targetDate={date} />}
          </div>
        </Sheet>

        <div className="text-center mt-3 mb-6">
          <Typography variant="subtitle">
            Bitcoin block reward will decrease from 6.25 to 3.125 coins in
            approximately.
          </Typography>
          <Typography variant="subtitle">
            Auto updates in real-time with every new block.
          </Typography>
        </div>

        <div className="flex flex-wrap w-[1000px] justify-center gap-3 mt-4">
          {data.map((ele:any) => (
            <Sheet variant="sm" subTitle={ele.name}>
              <p className="text-[22px]">{ele.value}</p>
            </Sheet>
          ))}
        </div>
      </div>
      <div className="w-[900px] mt-8">
        {aboutBTCHalvingConfig.map((ele) => (
          <div className="mb-4">
            <Typography variant="title">{ele.question}</Typography>
            <Typography variant="subtitle">{ele.answer}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
