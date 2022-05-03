export const format_curency = ((money) => {
    money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return money + "₫";
});

