const express = require("express");
const mysql = require("mysql");
const app = express();

let user = "";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "proyectoweb",
});

conexion.connect(function (err) {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    throw err;
  }
  console.log("Conectado a la BD");
});

app.get("/", function(req, res) {

});

app.get("/sesion", (req, res) => {
    if (user == "") {
    }else {
      res.json({ message: user });
    }
});
  
app.get("/cerrarsesion", function(req, res) {
    user = "";
    console.log("¡Sesión finalizada!");
});

app.post("/iniciars", function (req, res) {
    const datos = req.body;
    const nombre = datos.nombre;
    const contrasena = datos.contrasena;
  
    const querySql = "SELECT * FROM empleados WHERE nombre = '" + nombre + "' AND contrasena = '" + contrasena + "'";
  
    conexion.query(querySql, function (error, row) {
      if (error) {
          res.status(500).json({ message: "¡Error al consultar la base de datos!" });
      } else {
        if (row.length > 0) {
          console.log("¡Inicio de sesión exitoso!");
          res.status(200).json({ message: "¡Inicio de sesión exitoso!" });
          user = nombre;
        } else {
          console.log("¡Usuario o contraseña incorrectos!");
          res.status(401).json({ message: "¡Usuario o contraseña incorrectos!" });
        }
      }
    });
});

//EMPLEADOS
app.get("/obtenerEmpleados", function (req, res) {
    const query = "SELECT * FROM empleados";
    conexion.query(query, function (error, rows) {
      if (error) {
        res.status(500).json({ message: "Error al obtener empleados" });
      } else {
        res.json(rows);
      }
    });
  });
  
  app.post("/registrarEmpleado", function (req, res) {
    const datos = req.body;
    const query = "INSERT INTO empleados SET ?";
    conexion.query(query, datos, function (error) {
      if (error) {
        res.status(500).json({ message: "Error al registrar empleado" });
      } else {
        res.status(200).json({ message: "Empleado registrado correctamente" });
      }
    });
  });
  
  app.put("/actualizarEmpleado/:id", function (req, res) {
    const id = req.params.id;
    const datos = req.body;
    const query = "UPDATE empleados SET ? WHERE id = ?";
    conexion.query(query, [datos, id], function (error) {
      if (error) {
        res.status(500).json({ message: "Error al actualizar empleado" });
      } else {
        res.status(200).json({ message: "Empleado actualizado correctamente" });
      }
    });
  });
  
  app.delete("/eliminarEmpleado/:id", function (req, res) {
    const id = req.params.id;
    const query = "DELETE FROM empleados WHERE id = ?";
    conexion.query(query, [id], function (error) {
      if (error) {
        res.status(500).json({ message: "Error al eliminar empleado" });
      } else {
        res.status(200).json({ message: "Empleado eliminado correctamente" });
      }
    });
  });

//USUARIOS
app.get("/obtenerUsuarios", function (req, res) {
  const query = "SELECT * FROM usuarios";
  conexion.query(query, function (error, rows) {
    if (error) {
      res.status(500).json({ message: "Error al obtener usuarios" });
    } else {
      res.json(rows);
    }
  });
});

app.post("/registrarUsuario", function (req, res) {
  const datos = req.body;
  const query = "INSERT INTO usuarios SET ?";
  conexion.query(query, datos, function (error) {
    if (error) {
      res.status(500).json({ message: "Error al registrar usuario" });
    } else {
      res.status(200).json({ message: "Usuario registrado correctamente" });
    }
  });
});

app.put("/actualizarUsuario/:id", function (req, res) {
  const id = req.params.id;
  const datos = req.body;
  const query = "UPDATE usuarios SET ? WHERE id = ?";
  conexion.query(query, [datos, id], function (error) {
    if (error) {
      res.status(500).json({ message: "Error al actualizar usuario" });
    } else {
      res.status(200).json({ message: "Usuario actualizado correctamente" });
    }
  });
});

app.delete("/eliminarUsuario/:id", function (req, res) {
  const id = req.params.id;
  const query = "DELETE FROM usuarios WHERE id = ?";
  conexion.query(query, [id], function (error) {
    if (error) {
      res.status(500).json({ message: "Error al eliminar usuario" });
    } else {
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    }
  });
});

//SERVICIOS
app.get("/obtenerServicios", function (req, res) {
    const query = "SELECT * FROM Servicios";
    conexion.query(query, function (error, rows) {
      if (error) {
        res.status(500).json({ message: "Error al obtener servicios" });
      } else {
        res.json(rows);
      }
    });
  });

app.post("/registrarServicio", function (req, res) {
    const datos = req.body;
    const query = "INSERT INTO Servicios SET ?";
    conexion.query(query, datos, function (error) {
      if (error) {
        res.status(500).json({ message: "Error al registrar servicio" });
      } else {
        res.status(200).json({ message: "Servicio registrado correctamente" });
      }
    });
  });
  
  app.put("/actualizarServicio", function (req, res) {
    const id = req.params.id;
    const datos = req.body;
    const query = "UPDATE Servicios SET ? WHERE id = ?";
    conexion.query(query, [datos, id], function (error) {
      if (error) {
        res.status(500).json({ message: "Error al actualizar servicio" });
      } else {
        res.status(200).json({ message: "Servicio actualizado correctamente" });
      }
    });
  });
  
  app.delete("/eliminarServicio", function (req, res) {
    const id = req.params.id;
    const query = "DELETE FROM Servicios WHERE id = ?";
    conexion.query(query, [id], function (error) {
      if (error) {
        res.status(500).json({ message: "Error al eliminar servicio" });
      } else {
        res.status(200).json({ message: "Servicio eliminado correctamente" });
      }
    });
  });

  // CITAS
app.get("/obtenerCitas", function (req, res) {
  const query = "SELECT * FROM Citas";
  conexion.query(query, function (error, rows) {
    if (error) {
      res.status(500).json({ message: "Error al obtener citas" });
    } else {
      res.json(rows);
    }
  });
});

//FARMACIA
app.get("/obtenerFarmacia", function (req, res) {
    const query = "SELECT * FROM farmacia";
    conexion.query(query, function (error, rows) {
      if (error) {
        res.status(500).json({ message: "Error al obtener productos" });
      } else {
        res.json(rows);
      }
    });
  });
  
  app.post("/registrarFarmacia", function (req, res) {
    const datos = req.body;
    const query = "INSERT INTO farmacia SET ?";
    conexion.query(query, datos, function (error) {
      if (error) {
        res.status(500).json({ message: "Error al registrar producto" });
      } else {
        res.status(200).json({ message: "Producto registrado correctamente" });
      }
    });
  });
  
  app.put("/actualizarFarmacia/:id", function (req, res) {
    const id = req.params.id;
    const datos = req.body;
    const query = "UPDATE farmacia SET ? WHERE id = ?";
    conexion.query(query, [datos, id], function (error) {
      if (error) {
        res.status(500).json({ message: "Error al actualizar producto" });
      } else {
        res.status(200).json({ message: "Producto actualizado correctamente" });
      }
    });
  });
  
  app.delete("/eliminarFarmacia/:id", function (req, res) {
    const id = req.params.id;
    const query = "DELETE FROM farmacia WHERE id = ?";
    conexion.query(query, [id], function (error) {
      if (error) {
        res.status(500).json({ message: "Error al eliminar producto" });
      } else {
        res.status(200).json({ message: "Producto eliminado correctamente" });
      }
    });
  });

app.listen(3001, () => {
  console.log("Servidor en el puerto 3001...");
});
