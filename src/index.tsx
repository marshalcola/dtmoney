import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

import { GlobalStyle } from "./styles/global";

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "FreeLancer e Websites",
          type: "Deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2022-03-31 09:00:35"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "Withdraw",
          category: "Casa",
          amount: 2000,
          createdAt: new Date("2022-03-31 09:30:25"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", (schema) => {
      return this.schema.all("transaction");
      //[
      //   {
      //     // id: 1,
      //     // title: "Transaction 1",
      //     // amount: 400,
      //     // type: "deposit",
      //     // category: "Food",
      //     // createdAt: new Date(),
      //   },
      // ];
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
