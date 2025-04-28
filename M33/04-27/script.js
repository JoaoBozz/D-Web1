function TROCARlampada() {
    let lampada = document.getElementById('lampada');

    let lampadaApagada = "https://file.notion.so/f/f/48a2f079-68a5-4bb5-99eb-51881ae2de09/b719fd55-0b02-4560-901d-018517e9664c/lampada-off.jpg?table=block&id=4741bb75-64b6-4484-9d78-fd26a4fafdb8&spaceId=48a2f079-68a5-4bb5-99eb-51881ae2de09&expirationTimestamp=1745827200000&signature=nIjg_5QU6yymmGJ3l8dRRpnyN29OqJObuPSmW_NkeCw&downloadName=lampada-off.jpg";

    let lampadaAcesa = "https://file.notion.so/f/f/48a2f079-68a5-4bb5-99eb-51881ae2de09/71f26421-6270-427b-9957-c6a65123a79e/lampada-on.jpg?table=block&id=d3312970-75fa-451e-b926-2a0407fe6fb8&spaceId=48a2f079-68a5-4bb5-99eb-51881ae2de09&expirationTimestamp=1745827200000&signature=ikleRfbRxOvjh4PDMPyhZTva7RBKHBlPzYoxVK6WkhU&downloadName=lampada-on.jpg";

    if (lampada.src === lampadaApagada) {
        lampada.src = lampadaAcesa;
    } else {
        lampada.src = lampadaApagada;
    }
}
