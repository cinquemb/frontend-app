import Web3 from "web3";
import Migrations from "../../../static/abi/Migrations.json";
var migrationsContractAddress = "0xbACf2F11eB10475DA816c1ADCB8B376FffD1544c";
//var migrationsContractAddress = "0xfC84D046C5ac723722033d8DF9985d70d85D2B18"; //ganache
//var migrationsContractAddress = "0x3f3207c60F6089cFD5828A2e0937DdC7Bd394e99"; //rinkeby

export async function addToWatchlist(metamaskDetails) {
  console.log("details ", metamaskDetails);
  window.web3.currentProvider.sendAsync(
    {
      method: "metamask_watchAsset",
      params: {
        type: "ERC20", // Initially only supports ERC20, but eventually more!
        options: {
          address: metamaskDetails.address, // The address that the token is at.
          symbol: metamaskDetails.symbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: metamaskDetails.decimals, // The number of decimals in the token
          image: metamaskDetails.image, // A string url of the token logo
        },
      },
      id: Math.round(Math.random() * 100000),
    },
    (err, addedBoolean) => {}
  );
}
export async function getCurrentMigrations(setCurrentMigration) {
  let abiArray = Migrations;
  let abi = abiArray.abi;
  let migrationsInstance = new window.web3.eth.Contract(abi, migrationsContractAddress);
  let currentMigration = await migrationsInstance.methods.last_completed_migration().call();
  setCurrentMigration(currentMigration);
  console.log("current migrations is ", currentMigration);
}

export async function getUserAddressProject(setUserAddress, setProjectBalance, tokenAbi, tokenContractAddress) {
  let userAddress = await window.ethereum.selectedAddress;
  setUserAddress(userAddress);
  await getProjectBalance(setProjectBalance, userAddress, tokenAbi, tokenContractAddress);
}

export async function getUserAddress(setUserAddress, setShineBalance, tokenAbi, tokenContractAddress) {
  let userAddress = await window.ethereum.selectedAddress;
  console.log("user address ", userAddress);
  setUserAddress(userAddress);
  await getShineBalance(setShineBalance, userAddress, tokenAbi, tokenContractAddress);
}
export async function getOnlyUserAddress() {
  let userAddress = await window.ethereum.selectedAddress;
  console.log("user address ", userAddress);
  return userAddress;
}

export async function getWeiRaised(setWeiRaised, saleAbi, saleContractAddress) {
  console.log("abi 1", saleAbi);
  let abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);
  let weiRaised = await simpleCrowdsaleInstance.methods.weiRaised().call();

  setWeiRaised(weiRaised);
  console.log("Wei raised so far", weiRaised);
}

export async function getSeedSaleShnBalance(setSeedSaleShnBalance, tokenAbi, saleContractAddress, tokenContractAddress) {
  var abiToken = tokenAbi;
  var tokenInst = new window.web3.eth.Contract(abiToken, tokenContractAddress);
  var seedSaleShnBalance = await tokenInst.methods.balanceOf(saleContractAddress).call();
  let shnAvailable = window.web3.utils.fromWei(seedSaleShnBalance.toString(), "ether");

  setSeedSaleShnBalance(shnAvailable);
}

export async function getEthRaised(setEthRaised, saleAbi, saleContractAddress) {
  let abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);
  let weiRaised = await simpleCrowdsaleInstance.methods.weiRaised().call();
  let ethRaised = window.web3.utils.fromWei(weiRaised.toString(), "ether");
  setEthRaised(ethRaised);
  console.log("Eth raised so far", ethRaised);
}

export async function getEthBalance(setBalance) {
  window.web3.eth.getBalance(window.ethereum.selectedAddress, (err, balance) => {
    //console.log(window.web3.utils.fromWei(balance, "ether") + " ETH");
    setBalance(window.web3.utils.fromWei(balance.toString(), "ether"));
  });
}
export async function getShineBalance(setShineBalance, userAddress, tokenAbi, tokenContractAddress) {
  var abiToken = tokenAbi;
  var tokenInst = new window.web3.eth.Contract(abiToken, tokenContractAddress);

  var shineBalance = await tokenInst.methods.balanceOf(userAddress).call();

  var shineBalanceFromWei = window.web3.utils.fromWei(shineBalance, "ether");
  setShineBalance(shineBalanceFromWei);
}

export async function getProjectBalance(setProjectBalance, userAddress, tokenAbi, tokenContractAddress) {
  console.log("adress ", userAddress);
  var abiToken = tokenAbi;
  var tokenInst = new window.web3.eth.Contract(abiToken, tokenContractAddress);

  var projectBalance = await tokenInst.methods.balanceOf(userAddress).call();

  var projectBalanceFromWei = window.web3.utils.fromWei(projectBalance, "ether");
  setProjectBalance(projectBalanceFromWei);
}

export async function getVestingPeriod(saleAbi, saleContractAddress, setUserAddress, setVestingPeriod) {
  let userAddress = await window.ethereum.selectedAddress;
  setUserAddress(userAddress);

  var abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  var vestingPeriod = await simpleCrowdsaleInstance.methods.vestingPeriod(userAddress).call();

  setVestingPeriod(vestingPeriod);
}
export async function getVestedBalances(saleAbi, saleContractAddress, setUserAddress, setVestedBalances) {
  let userAddress = await window.ethereum.selectedAddress;
  setUserAddress(userAddress);

  var abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  var vestedBalances = await simpleCrowdsaleInstance.methods.vestedBalances(userAddress).call();

  var vestedBalancesFromWei = window.web3.utils.fromWei(vestedBalances, "ether");
  setVestedBalances(vestedBalancesFromWei);
}

export async function getRelativeCap(saleAbi, saleContractAddress, setUserAddress, setRelativeCap) {
  let userAddress = await window.ethereum.selectedAddress;
  setUserAddress(userAddress);

  var abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  var relativeCap = await simpleCrowdsaleInstance.methods.relativeCap().call();

  setRelativeCap(relativeCap);
}

export async function getContributions(saleAbi, saleContractAddress, setUserAddress, setContributions) {
  let userAddress = await window.ethereum.selectedAddress;
  setUserAddress(userAddress);

  var abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  var contributions = await simpleCrowdsaleInstance.methods.contributions(userAddress).call();

  setContributions(window.web3.utils.fromWei(toPlainString(contributions), "ether"));
}

export async function getIsSaleOpenForAll(saleAbi, saleContractAddress, setIsSaleOpenForAll) {
  var abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  var isSaleOpenForAll = await simpleCrowdsaleInstance.methods.isSaleOpenForAll().call();

  setIsSaleOpenForAll(isSaleOpenForAll);
}

export function getTier(shineBalance) {
  if (shineBalance < 15000) {
    return "No Tier";
  } else if (shineBalance >= 15000 && shineBalance < 50000) {
    return "Tier 1";
  } else if (shineBalance >= 50000 && shineBalance < 200000) {
    return "Tier 2";
  } else if (shineBalance >= 200000 && shineBalance < 400000) {
    return "Tier 3";
  } else if (shineBalance >= 400000) {
    return "Tier 4";
  }
}

export function getMaximumContribution(relativeCap, shineBalance) {
  console.log("rc, bal", relativeCap, shineBalance);
  let multiplier;
  if (shineBalance < 1500) {
    multiplier = 0;
  } else if (shineBalance >= 15000 && shineBalance < 50000) {
    multiplier = 1;
  } else if (shineBalance >= 50000 && shineBalance < 200000) {
    multiplier = 2;
  } else if (shineBalance >= 200000 && shineBalance < 400000) {
    multiplier = 4;
  } else if (shineBalance >= 400000) {
    multiplier = 8;
  }
  let maximumContribution = window.web3.utils.fromWei(toPlainString(relativeCap * multiplier), "ether");
  return maximumContribution;
}

//console.log(kFormatter(1200)); // 1.2k
//console.log(kFormatter(-1200)); // -1.2k
//console.log(kFormatter(900)); // 900
//console.log(kFormatter(-900)); // -900
export function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" : Math.sign(num) * Math.abs(num);
}

export function timeConverter(UNIX_timestamp) {
  console.log("time ", UNIX_timestamp, typeof UNIX_timestamp);
  var a = new Date(UNIX_timestamp * 1000);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

export async function withdrawTokens(saleAbi, saleContractAddress, userAddress, gas, setTransactionBeingProcessed, setMetamaskErrorCode, setIsTokenWithdrawn, setShineBought) {
  let abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  setTransactionBeingProcessed(true);
  setMetamaskErrorCode(undefined);

  try {
    let estimatedGas = await simpleCrowdsaleInstance.methods.withdrawTokens(userAddress).estimateGas({
      from: userAddress,
      gas: gas,
    });

    const receipt = await simpleCrowdsaleInstance.methods.withdrawTokens(userAddress).send({
      from: userAddress,
      gas: estimatedGas,
    });
    setIsTokenWithdrawn(true);
  } catch (e) {
    console.log("err ", e);
    setIsTokenWithdrawn(false);
    setShineBought(false);
    if (e.message.search("Vesting: the time required for vesting is not expired yet") >= 0) {
      setMetamaskErrorCode("The time required for vesting is not expired yet");
    }
  }
  setTransactionBeingProcessed(false);
}
export async function enableAccessForTier1AndTier2(userAddress, gas, saleAbi, saleContractAddress) {
  let abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  try {
    let estimatedGas = await simpleCrowdsaleInstance.methods.allowAllTierAccess(true).estimateGas({
      from: userAddress,
      gas: gas,
    });

    const receipt = await simpleCrowdsaleInstance.methods.allowAllTierAccess(true).send({
      from: userAddress,
      gas: estimatedGas,
    });
    console.log("receipt", receipt);
  } catch (e) {
    console.log("err ", e);
    console.log("Transaction rejected", e.code);
  }
}

export async function buyShineTokens(ethAmountToSpend, setEthAmountToSpend, setShineBought, setShineBoughtAmount, setTransactionBeingProcessed, setMetamaskErrorCode, userAddress, saleAbi, saleContractAddress, gas, currentStatus) {
  if (ethAmountToSpend !== "") {
    //disable button if no amount is entered
    let abi = saleAbi;
    let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

    setTransactionBeingProcessed(true);
    setMetamaskErrorCode(undefined);

    try {
      let estimatedGas = await simpleCrowdsaleInstance.methods.buyTokens(userAddress).estimateGas({
        from: userAddress,
        value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
        gas: gas,
      });
      //let estimatedGas = 100000;

      console.log("estimated gas ", estimatedGas);

      console.log("eth amount to spend", ethAmountToSpend);
      const receipt = await simpleCrowdsaleInstance.methods.buyTokens(userAddress).send({
        from: userAddress,
        value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
        gas: estimatedGas,
      });
      console.log("receipt", receipt);
      var amountBoughtInWei = receipt.events.TokensPurchased.returnValues.amount;
      var amountBoughtInTKNs = window.web3.utils.fromWei(amountBoughtInWei, "ether");

      setShineBought(true);
      setShineBoughtAmount(amountBoughtInTKNs);
      setEthAmountToSpend("");
    } catch (e) {
      setShineBought(false);
      console.log("err ", e);
      console.log("User rejected transaction", e.code);

      if (e.message.search("insufficient funds for transfer") >= 0) {
        setMetamaskErrorCode("The amount that you are trying to buy, exceeds the amount that you have available in your wallet");
      } else if (e.message.search("IndividuallyCappedCrowdsale: beneficiary's cap exceeded") >= 0) {
        setMetamaskErrorCode("Your total amount exceeds maximum participation");
      } else if (e.code === 4001) {
        setMetamaskErrorCode(e.message); //MetaMask Tx Signature: User denied transaction signature.
      } else if (e.message.search("Reference to the Shine Token contract has not been set") >= 0) {
        setMetamaskErrorCode("Reference to the Shine Token contract has not been set");
      } else if (e.message.search("Relative cap exceeded") >= 0) {
        setMetamaskErrorCode("Relative cap exceeded");
      } else if (e.message.search("Currently you are below Tier 1 level, but you need to be at least Tier3 in order to participate in the seed sale") >= 0) {
        if (currentStatus === "seed" || currentStatus == "ganacheSeed") {
          setMetamaskErrorCode("Currently you are below Tier 1 level, but you need to have at least 15 000 SHN in order to participate");
        } else if (currentStatus === "ido" || currentStatus == "ganacheSeed") {
          setMetamaskErrorCode("Currently you are below Tier 1 level, but you need to be at least 15 000 SHN in order to participate");
        }
      } else if (e.message.search("You are Tier 1, but you need to be Tier3 in order to participate in the seed sale") >= 0) {
        setMetamaskErrorCode("You are Tier 1, but you need to be Tier3 in order to participate in the seed sale or you can wait until 3:30 pm UTC its opened for Tier 1 and Tier 2");
      } else if (e.message.search("You are Tier 2, but You need to be Tier3 in order to participate in the seed sale") >= 0) {
        setMetamaskErrorCode("You are Tier 2, but You need to be Tier3 in order to participate in the seed sale or you can wait until 3:30 pm UTC its opened for Tier 1 and Tier 2");
      } else if (e.message.search("The amount that is being bought is too small to split it partially for vesting") >= 0) {
        setMetamaskErrorCode("The amount that is being bought is too small to split it partially for vesting");
      } else if (e.message.search("weiAmount is 0") >= 0) {
        setMetamaskErrorCode("0 is not a valid amount, please enter another ETH amount in the input field");
      } else {
        setMetamaskErrorCode("Something went wrong, please contact the support"); //"There are not enough project tokens left for sale anymore"
      }

      let searchCapExceeded = e.message.search("IndividuallyCappedCrowdsale: beneficiary's cap exceeded");
      console.log("search ", searchCapExceeded); //149
      // console.log("metamask code", metamaskErrorCode)
    }
    setTransactionBeingProcessed(false);
  }
}

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.reload(true);
}
export async function loadWeb3(setWalletStatus, setBalance, setCurrentNetwork) {
  if (window.ethereum) {
    console.log("load 1", window.web3);
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    await getEthBalance(setBalance);
    setWalletStatus(true);
    setCurrentNetwork(window.web3.currentProvider.chainId);
    ethereum.on("chainChanged", handleChainChanged);
    ethereum.on("accountsChanged", handleAccountsChanged);

    console.log("load 1", window.web3);
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    setWalletStatus(true);
    setCurrentNetwork(window.web3.currentProvider.chainId);
    ethereum.on("chainChanged", handleChainChanged);
    ethereum.on("accountsChanged", handleAccountsChanged);

    console.log("load 2");
  } else {
    setWalletStatus(false);
    setCurrentNetwork(window.web3.currentProvider.chainId);
    ethereum.on("chainChanged", handleChainChanged);
    ethereum.on("accountsChanged", handleAccountsChanged);
    window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    console.log("load 3");
  }
}
function handleAccountsChanged(accounts, currentAccount) {
  console.log("current account called 321", accounts);
  window.location.reload(true);
}
export function handleChangeOfEthAmountToSpend(amount, setEthAmountToSpend) {
  setEthAmountToSpend(amount);
}

export function handleChangeOfShnReference(shnReference, setShnReference) {
  setShnReference(shnReference);
}
export function handleChangeOfNewRelativeCap(newRelativeCap, setNewRelativeCap) {
  setNewRelativeCap(newRelativeCap);
}
export async function setNewRelativeCap(userAddress, newRelativeCap, gas, saleAbi, saleContractAddress) {
  let abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  try {
    let estimatedGas = await simpleCrowdsaleInstance.methods.setRelativeCap(newRelativeCap).estimateGas({
      from: userAddress,
      gas: gas,
    });

    const receipt = await simpleCrowdsaleInstance.methods.setRelativeCap(newRelativeCap).send({
      from: userAddress,
      gas: estimatedGas,
    });
    console.log("receipt", receipt);
  } catch (e) {
    console.log("err ", e);
    console.log("Transaction rejected", e.code);
  }
}

export async function setShineTokenAddress(userAddress, shnReference, gas, saleAbi, saleContractAddress) {
  let abi = saleAbi;
  let simpleCrowdsaleInstance = new window.web3.eth.Contract(abi, saleContractAddress);

  try {
    let estimatedGas = await simpleCrowdsaleInstance.methods.setShineTokenAddress(shnReference).estimateGas({
      from: userAddress,
      gas: gas,
    });

    const receipt = await simpleCrowdsaleInstance.methods.setShineTokenAddress(shnReference).send({
      from: userAddress,
      gas: estimatedGas,
    });
    console.log("receipt", receipt);
  } catch (e) {
    console.log("err ", e);
    console.log("Transaction rejected", e.code);
  }
}
export function toPlainString(num) {
  console.log("plain straing", num.toLocaleString("fullwide", { useGrouping: false }));
  return num.toLocaleString("fullwide", { useGrouping: false });
}

export function estimateReceivedShn(ethAmountToSpend, rate) {
  console.log("eth to spend", ethAmountToSpend);
  const weiAmountToSpend = window.web3.utils.toWei(ethAmountToSpend.toString(), "ether");
  console.log("wei", toPlainString(weiAmountToSpend * rate));

  console.log("www", weiAmountToSpend * rate);

  //const estimatedShnInWei = weiAmountToSpend * rate
  const estimatedReceivedShn = window.web3.utils.fromWei(toPlainString(weiAmountToSpend * rate), "ether");
  console.log("www1", Number.parseFloat(estimatedReceivedShn));
  return Number.parseFloat(estimatedReceivedShn);
}

export function fromWei(amountInWei) {
  const amountInBaseUnit = window.web3.utils.fromWei(toPlainString(amountInWei), "ether");
  return Number.parseFloat(amountInBaseUnit);
}

export function toWei(amountInBaseUnit) {
  const amountInWei = window.web3.utils.toWei(amountInBaseUnit.toString(), "ether");
  return amountInWei.toString();
}

export async function getAllowance(setAllowance, veShnAddress, userAddress, tokenAbi, tokenContractAddress) {
  var abiToken = tokenAbi;
  var tokenInst = new window.web3.eth.Contract(abiToken, tokenContractAddress);

  var allowance = await tokenInst.methods.allowance(userAddress, veShnAddress).call();
  setAllowance(allowance);
}

export async function getEpoch(setEpoch, veShnAddress, veShnTokenAbi) {
  var veShnInstance = new window.web3.eth.Contract(veShnTokenAbi, veShnAddress);
  var epoch = await veShnInstance.methods.epoch().call();
  setEpoch(epoch);
}

export async function getUserPointHistory(setUserPointHistory, userAddress, veShnAddress, veShnTokenAbi) {
  var veShnInstance = new window.web3.eth.Contract(veShnTokenAbi, veShnAddress);
  let epochFound = await veShnInstance.methods.user_point_epoch(userAddress).call();
  var userPointHistory = await veShnInstance.methods.user_point_history(userAddress, epochFound).call();
  console.log("userPointHistory userPointHistory 1", epochFound, userPointHistory, typeof userPointHistory);
  setUserPointHistory(userPointHistory);
}

export async function getTotalShnSupply(veShnTokenAbi, veShnAddress) {
  var veShnInstance = new window.web3.eth.Contract(veShnTokenAbi, veShnAddress);
  var totalShnSupply = await veShnInstance.methods.totalFXSSupply().call();
  return totalShnSupply;
}

export async function getPeriodFinish(veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYield = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var periodFinish = await veShnYield.methods.periodFinish().call();
  return periodFinish;
}

export async function getLastUpdateTime(veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYield = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var lastUpdateTime = await veShnYield.methods.lastUpdateTime().call();
  return lastUpdateTime;
}

export async function getYieldRate(veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYield = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var yieldRate = await veShnYield.methods.yieldRate().call();
  return yieldRate;
}

export async function getyieldPerVeFXSStored(veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYield = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var yieldPerVeShnStored = await veShnYield.methods.yieldPerVeFXSStored().call();
  return yieldPerVeShnStored;
}

export async function getYieldPerVeShn(userAddress, veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYield = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var yieldPerVeShn = await veShnYield.methods.yieldPerVeFXS().call();
  return yieldPerVeShn;
  //try {
  //  let estimatedGas = await veShnYield.methods.yieldPerVeFXS().estimateGas({
  //    from: userAddress,
  //  });
  //  console.log("estimated gas for yieldPerVeShn", estimatedGas);
  //
  //  const receipt = await veShnYield.methods.yieldPerVeFXS().send({
  //    from: userAddress,
  //    gas: estimatedGas,
  //  });
  //  console.log("receipt yieldPerVeShn", receipt);
  //} catch (e) {
  //  console.log("err ", e);
  //  console.log("Transaction rejected", e.code);
  //}
}

export async function getEarned(userAddress, veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYield = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var earned = await veShnYield.methods.earned(userAddress).call();
  return earned;
}

export async function sync(userAddress, setRefetchData, loadingIndicator, setLoadingIndicator, veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYield = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);

  try {
    let estimatedGas = await veShnYield.methods.sync().estimateGas({
      from: userAddress,
    });
    console.log("estimated gas for sync", estimatedGas);

    const receipt = await veShnYield.methods.sync().send({
      from: userAddress,
      gas: estimatedGas,
    });
    console.log("receipt", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "sync"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
    setRefetchData(true); // after every successful transaction, the data on the frontend needs to be refetched
  } catch (e) {
    console.log("err ", e);
    console.log("Transaction rejected", e.code);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "sync"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
  }
}

export async function getTotalVeFXSParticipating(veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYieldDistributorInstance = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var totalVeFXSParticipating = await veShnYieldDistributorInstance.methods.totalVeFXSParticipating().call();
  return totalVeFXSParticipating;
}

export async function getTotalVeFXSSupplyStored(veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYieldDistributorInstance = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var getTotalVeFXSSupplyStored = await veShnYieldDistributorInstance.methods.totalVeFXSSupplyStored().call();
  return getTotalVeFXSSupplyStored;
}

export async function getUserVeShnCheckpointed(userAddress, veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYieldDistributorInstance = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var userVeShnCheckpointed = await veShnYieldDistributorInstance.methods.userVeFXSCheckpointed(userAddress).call();
  return userVeShnCheckpointed;
}

export async function getUserVeShnEndpointCheckpointed(userAddress, veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYieldDistributorInstance = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var userVeShnEndpointCheckpointed = await veShnYieldDistributorInstance.methods.userVeFXSEndpointCheckpointed(userAddress).call();
  return userVeShnEndpointCheckpointed;
}

export async function getFractionParticipating(veShnYieldDistributorAbi, veShnYieldDistributorAddress) {
  var veShnYieldDistributorInstance = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);
  var fractionParticipating = await veShnYieldDistributorInstance.methods.fractionParticipating().call();
  return fractionParticipating;
}

export async function veShnCheckpoint(userAddress, loadingIndicator, setLoadingIndicator, setRefetchData, veShnAddress, veShnAbi) {
  var veShnInstance = new window.web3.eth.Contract(veShnAbi, veShnAddress);

  try {
    let estimatedGas = await veShnInstance.methods.checkpoint().estimateGas({
      from: userAddress,
    });
    console.log("estimated gas for sync", estimatedGas);

    const receipt = await veShnInstance.methods.checkpoint().send({
      from: userAddress,
      gas: estimatedGas,
    });
    console.log("receipt", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "veShnCheckpoint"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
    setRefetchData(true); // after every successful transaction, the data on the frontend needs to be refetched
  } catch (e) {
    console.log("err ", e);
    console.log("Transaction rejected", e.code);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "veShnCheckpoint"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
  }
}

export async function rewardCheckpoint(userAddress, loadingIndicator, setLoadingIndicator, setRefetchData, veShnYieldDistributorAddress, veShnYieldDistributorAbi) {
  var veShnYieldDistributorInstance = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);

  try {
    let estimatedGas = await veShnYieldDistributorInstance.methods.checkpoint().estimateGas({
      from: userAddress,
    });
    console.log("estimated gas for sync", estimatedGas);

    const receipt = await veShnYieldDistributorInstance.methods.checkpoint().send({
      from: userAddress,
      gas: estimatedGas,
    });
    console.log("receipt", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "rewardCheckpoint"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
    setRefetchData(true); // after every successful transaction, the data on the frontend needs to be refetched
  } catch (e) {
    console.log("err ", e);
    console.log("Transaction rejected", e.code);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "rewardCheckpoint"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
  }
}

export async function getYield(userAddress, loadingIndicator, setLoadingIndicator, setRefetchData, veShnYieldDistributorAddress, veShnYieldDistributorAbi,setSuccessMessage,toggle) {
  var veShnYieldDistributorInstance = new window.web3.eth.Contract(veShnYieldDistributorAbi, veShnYieldDistributorAddress);

  try {
    let estimatedGas = await veShnYieldDistributorInstance.methods.getYield().estimateGas({
      from: userAddress,
    });
    console.log("estimated gas for sync", estimatedGas);

    const receipt = await veShnYieldDistributorInstance.methods.getYield().send({
      from: userAddress,
      gas: estimatedGas,
    });
    console.log("receipt", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "claim"); // none is default when there is nothing
    toggle() // plays sound when yield is collected
    setSuccessMessage({location:"rewardClaim"})
    setLoadingIndicator(currentLoadingIndicator);
    setRefetchData(true); // after every successful transaction, the data on the frontend needs to be refetched
  } catch (e) {
    console.log("err ", e);
    console.log("Transaction rejected", e.code);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "claim"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
  }
}

export async function withdrawShnFromVeShn(userAddress, loadingIndicator, setLoadingIndicator, veShnAddress, veShnAbi, setLockError) {
  var veShnInstance = new window.web3.eth.Contract(veShnAbi, veShnAddress);

  try {
    let estimatedGas = await veShnInstance.methods.withdraw().estimateGas({
      from: userAddress,
    });
    console.log("estimated gas for sync", estimatedGas);

    const receipt = await veShnInstance.methods.withdraw().send({
      from: userAddress,
      gas: estimatedGas,
    });
    console.log("receipt", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "withdraw"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
  } catch (e) {
    console.log("err ", e);
    setLockError(e.message);
    console.log("Transaction rejected", e.code);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "withdraw"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
  }
}

export async function increaseAmountOfLockedShn(userAddress, amountToLock, veShnAddress, veShnAbi, setLockError, setLocked, loadingIndicator, setLoadingIndicator, setShnBalance, setRefetchData, ShineTokenAbi, shnAddress) {
  var veSHN = new window.web3.eth.Contract(veShnAbi, veShnAddress);

  try {
    let estimatedGas = await veSHN.methods.increase_amount(toWei(amountToLock)).estimateGas({
      from: userAddress,
      //value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
      //gas: gas,
    });

    console.log("estimated gas for lock", estimatedGas);
    const receipt = await veSHN.methods.increase_amount(toWei(amountToLock)).send({
      from: userAddress,
      //value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
      gas: estimatedGas,
    });
    setLocked(await checkLocked(userAddress, veShnAddress, veShnAbi));
    getShineBalance(setShnBalance, userAddress, ShineTokenAbi, shnAddress);

    console.log("receipt ", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "increaseLockAmount"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
    setRefetchData(true); // after every successful transaction, the data on the frontend needs to be refetched
  } catch (e) {
    if (e.message.includes("Transaction reverted without a reason string")) {
      setLockError("Make sure that you are entering correct amount of SHN to lock and that you have enough allowance to do it.");
    } else {
      setLockError("Something went wrong");
    }
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "increaseLockAmount"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
    console.log("create lock error ", e);
  }
}

export async function increaseUnlockTimeForLockedShn(userAddress, desiredLockTimestamp, veShnAddress, veShnAbi, setLockError, setLocked, loadingIndicator, setLoadingIndicator, setRefetchData) {
  var veSHN = new window.web3.eth.Contract(veShnAbi, veShnAddress);
  try {
    let estimatedGas = await veSHN.methods.increase_unlock_time(desiredLockTimestamp).estimateGas({
      from: userAddress,
      //value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
      //gas: gas,
    });

    console.log("estimated gas for lock", estimatedGas);
    const receipt = await veSHN.methods.increase_unlock_time(desiredLockTimestamp).send({
      from: userAddress,
      //value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
      gas: estimatedGas,
    });
    setLocked(await checkLocked(userAddress, veShnAddress, veShnAbi));

    console.log("receipt ", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "increaseLockTime"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
    setRefetchData(true); // after every successful transaction, the data on the frontend needs to be refetched
  } catch (e) {
    if (e.message.includes("Can only increase lock duration")) {
      setLockError("Please increase lock duration.");
    }
    console.log("create lock error ", e);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "increaseLockTime"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
  }
}

export async function checkLocked(userAddress, veShnAddress, veShnAbi) {
  console.log("locked 1233 ", veShnAddress);
  var veSHN = new window.web3.eth.Contract(veShnAbi, veShnAddress);
  try {
    const locked = await veSHN.methods.locked(userAddress).call();
    console.log("locked 123 ", locked);
    return locked;
  } catch (e) {
    console.log("locked balance err ", e);
  }
}

export async function veShnApprove(userAddress, veShnAddress, setAllowance, loadingIndicator, setLoadingIndicator, shineAbi, shnAddress) {
  var SHN = new window.web3.eth.Contract(shineAbi, shnAddress);

  try {
    let estimatedGas = await SHN.methods.approve(veShnAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").estimateGas({
      from: userAddress,
      //value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
      //gas: gas,
    });

    console.log("estimated gas for lock", estimatedGas);
    const receipt = await SHN.methods.approve(veShnAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({
      from: userAddress,
      //value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
      gas: estimatedGas,
    });
    getAllowance(setAllowance, veShnAddress, userAddress, shineAbi, shnAddress);

    console.log("receipt ", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "approve"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
  } catch (e) {
    console.log("create lock error ", e);
  }
}

export async function createVeShnLock(userAddress, veShnAbi, veShnAddress, amountToLock, desiredLockTimestamp, loadingIndicator, setLoadingIndicator, setLockError, setRefetchData) {
  console.log("toWei ", toWei(amountToLock), typeof toWei(amountToLock));
  console.log("slider new", desiredLockTimestamp, typeof desiredLockTimestamp);

  let veSHN = new window.web3.eth.Contract(veShnAbi, veShnAddress);
  try {
    let estimatedGas = await veSHN.methods.create_lock(toWei(amountToLock), desiredLockTimestamp).estimateGas({
      from: userAddress,
      //value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
      //gas: gas,
    });

    console.log("estimated gas for lock", estimatedGas);
    const receipt = await veSHN.methods.create_lock(toWei(amountToLock), desiredLockTimestamp).send({
      from: userAddress,
      //value: window.web3.utils.toWei(ethAmountToSpend.toString(), "ether"),
      gas: estimatedGas,
    });
    console.log("receipt ", receipt);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "createLock"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
    setRefetchData(true); // after every successful transaction, the data on the frontend needs to be refetched
  } catch (e) {
    console.log("create lock error ", e);
    let currentLoadingIndicator = loadingIndicator.filter(v => v !== "none" && v !== "createLock"); // none is default when there is nothing
    setLoadingIndicator(currentLoadingIndicator);
    setLockError("Lock could not be created, please check the amount of SHN that you are locking. Additionally check that you have approved the contract.");
  }
}
import addresses from "../../../static/config/config";
export function getAddress(chainId, contract) {
  let chainIdContainer = {
    "0x1": "main",
    "0x89": "matic",
    "0x13881": "mumbai",
    "0x539": "hardhat",
  };
  let chain = chainIdContainer[chainId];
  console.log("chainx ", chain, typeof chain, addresses[contract][chain]);
  if (typeof chain != "undefined") {
    return addresses[contract][chain];
  } else {
    return addresses[shnAddress].hardhat;
  }
}


export function roundTo2Decimals(num){
  return Math.round(num * 100) / 100
}