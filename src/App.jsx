import './App.css'
import {CInput} from "./components/CInput.jsx";
import {useCallback, usecallback, useEffect, useState} from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import {Footer} from "./components/Footer.jsx";

function App() {

    const [amount, setAmount] = useState(100);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState("");

    const backgroundImage = "https://images.pexels.com/photos/2249527/pexels-photo-2249527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }

    useEffect(convert, [amount, currencyInfo, to]);

  return (
      <>
          <div
              className={'w-full h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center'}
              style={{
                  backgroundImage: `url(${backgroundImage})`,
              }}
          >
              <div
                  className={'text-white font-bold text-5xl align-text-top pb-5'}
              >
                  Currency Converter
              </div>
              <button
                  className={'fixed py-2 px-5 rounded-lg'}
                  style={{
                      background: '#074dd3',
                      color: "white"
                  }}
                  onClick={swap}
              >
                  Swap
              </button>
              <div className={'flex flex-col justify-center items-center'}>
                  <div
                      className={`border-2 rounded-t-xl bg-[#d2dfda]`}
                  >
                      <CInput
                          label={'From'}
                          amount={amount}
                          currencyOption={options}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          onAmountChange={(amount) => setAmount(amount)}
                          selectCurrency={from}
                      />
                      <CInput
                          label={'To'}
                          amount={convertedAmount}
                          currencyOption={options}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={to}
                          amountDisable
                      />

                  </div>
                  <button
                      className={'flex text-2xl text-center justify-center items-center py-4 px-5 w-full min-w-20 rounded-b-xl '}
                      style={{
                          background: '#074dd3',
                          color: "white"
                      }}
                      onClick={() => convert()}
                  >
                      {from.toUpperCase()} -&gt; {to.toUpperCase()}
                  </button>
              </div>

              <Footer className={'fixed w-full bg-black text-[#00FF00] text-center bottom-0'}/>

          </div>

      </>
  )
}

export default App
