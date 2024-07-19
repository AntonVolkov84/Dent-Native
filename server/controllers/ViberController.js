export const viber = () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "App 471e6dd8c599c3cb37ed10b97e10c997-cbb57b99-8e8a-45ab-9563-5e28155445e3"
  );
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  const raw = JSON.stringify({
    messages: [
      {
        sender: "DemoCompany",
        destinations: [{ to: "380958661514" }],
        content: {
          text: "Hello, Anton You are a good developer. Have a nice day!",
          type: "TEXT",
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://5y91mx.api.infobip.com/viber/2/messages", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};
