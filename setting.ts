export const taiko_addons = {
    bridge: false,  // бридж
    swap: true, // свапы 
    nft: false, // nft omnisea
    minpad: false, // nft minpad
    smart_contracts: true // фабрика контрактов
};

export const taiko_bridge = {
    amountBridgeProcentIn: [10,40], // процент для бриджа
    amount_in_procent_dex: [30,50] // задержка 
};

export const taiko_swap = {
    tx_count: [4, 4], // указывайте кол-во свапов
    amount_in_procent_dex: [30, 40], //только при первой транзакции eth -> токен а дальше свап всего баланса
    sleep_to_from: [40,80] // задержка между транзакциями
};

export const smart_fabric = {
    number_contracts: 3, //кол-во контрактов для взаимодействия
    sleep_to_from: [60,100] // задержка
};
