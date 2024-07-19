//! =====================================
//? =====  IMPORTS Required modules =====
//! =====================================

const http = require("http");

//! mimic (database)

const employees = [
  { id: 1, name: "Emmanuel" },
  { id: 2, name: "Agnes" },
];

//! =====================================
//? =====  Define The Handler =====
//! =====================================

const requestHandler = (req, res) => {
  const { method, url } = req;
  const parts = url.split("/");
  const id = parts[2];
  //! Get all employees
  if (method === "GET" && url === "/employees") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
  }
  //! Get single employee
  else if (method === "GET" && parts[1] === "employees" && id) {
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(employee));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Employee not found" }));
    }
  }

  //! Create new employee
  else if (method === "POST" && URL === "/employees") {
    const body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const newEmployee = JSON.parse(body);
      employees.push(newEmployee);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          newEmployee,
          employees,
        })
      );
    });
  }
};

//! =====================================
//? =====  Create The Server =====
//! =====================================

const server = http.createServer(requestHandler);

//! =====================================
//? =====  Start The Server =====
//! =====================================

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
